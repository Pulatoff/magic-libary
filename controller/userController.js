const userModel = require('../model/usersModel');

async function getUsers(req, res) {
  try {
    const data = await userModel.find();
    res.status(200).json({
      status: 'success',
      data: data,
    });
  } catch (e) {
    res.status(400).json({ status: 'failed', data: 'invalid request' });
  }
}

async function addUser(req, res) {
  try {
    const data = await userModel.create(req.body);
    res.status(201).json({
      status: 'success',
    });
  } catch (e) {
    res.status(400).json({ status: 'failed', data: 'invalid request' });
  }
}

async function getUser(req, res) {
  try {
  } catch (e) {
    res.status(400).json({ status: 'failed', data: 'invalid request' });
  }
}

async function updateUser(req, res) {
  const data = await userModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ status: 'success' });
  try {
  } catch (e) {
    res.status(400).json({ status: 'failed', data: 'invalid request' });
  }
}

async function deleteUser(req, res) {
  try {
    const data = await userModel.findByIdAndDelete(req.params.id);
  } catch (e) {
    res.status(400).json({ status: 'failed', data: 'invalid request' });
  }
}

module.exports = { getUsers, addUser, getUser, updateUser, deleteUser };
