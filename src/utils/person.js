import Cookies from 'js-cookie'

const idKey = 'idKey'
const stNumKey = 'stNumKey'
const stNameKey = 'stNameKey'
const stSexKey = 'stSexKey'
const stDepartmentKey = 'stDepartmentKey'
const stMajorKey = 'stMajorKey'
const stEmailKey = 'stEmailKey'

export function getId () {
  return Cookies.get(idKey)
}
export function getNum () {
  return Cookies.get(stNumKey)
}
export function getName () {
  return Cookies.get(stNameKey)
}
export function getSex () {
  return Cookies.get(stSexKey)
}
export function getDepartment () {
  return Cookies.get(stDepartmentKey)
}
export function getMajor () {
  return Cookies.get(stMajorKey)
}
export function getEmail () {
  return Cookies.get(stEmailKey)
}

export function setId (id) {
  return Cookies.set(idKey, id)
}
export function setNum (stNum) {
  return Cookies.set(stNumKey, stNum)
}
export function setName (stName) {
  return Cookies.set(stNameKey, stName)
}
export function setSex (stSex) {
  return Cookies.set(stSexKey, stSex)
}
export function setDepartment (stDepartment) {
  return Cookies.set(stDepartmentKey, stDepartment)
}
export function setMajor (stMajor) {
  return Cookies.set(stMajorKey, stMajor)
}
export function setEmail (stEmail) {
  return Cookies.set(stEmailKey, stEmail)
}

export function removeId () {
  return Cookies.remove(idKey)
}
export function removeNum () {
  return Cookies.remove(stNumKey)
}
export function removeName () {
  return Cookies.remove(stNameKey)
}
export function removeSex () {
  return Cookies.remove(stSexKey)
}
export function removeDepartment () {
  return Cookies.remove(stDepartmentKey)
}
export function removeMajor () {
  return Cookies.remove(stMajorKey)
}
export function removeEmail () {
  return Cookies.remove(stEmailKey)
}
