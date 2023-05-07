import { atom } from "recoil";
const birthState = atom({
    key: 'birthState', 
    default:new Date(),
});
export default birthState