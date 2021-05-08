const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const createToken = (user, SECRET_KEY, expiresIn) => {
  const { id, name, email, username } = user;
  const payload = {
    id,
    name,
    email,
    username  
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

const newUser = async ({ name, username, email, password }) => {
  email = email.toLowerCase();
  username = username.toLowerCase();
  // Buscando correo
  const findEmail = await User.findOne({ email });
  if (findEmail) throw new Error('El correo ya se encuentra registrado');
  
  // Buscando username
  const findUsername = await User.findOne({ username });
  if (findUsername) throw new Error('El nombre de usuario ya se encuentra registrado');

  // generando la encriptacion
  const salt = await bcryptjs.genSaltSync(10);
  password = await bcryptjs.hash(password, salt);
  const user = new User({ email, username, name, password });
  user.save();
  return user;
};

const authentication = async ({ email, password}) => {
  email = email.toLowerCase();
  const findUser = await User.findOne({ email });
  if (!findUser) throw new Error('Error al ingresar la contrasena o email');
  const isCorrectPassword = await bcryptjs.compare(password, findUser.password);
  if (!isCorrectPassword) throw new Error('Error al tratar de ingresar la contrasena');
  return {
    token: createToken(findUser, process.env.SECRET_KEY, '2h')
  }
}

module.exports = {
  newUser,
  authentication
};