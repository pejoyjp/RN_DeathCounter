import { atom } from "recoil";
const lifeSpanState = atom({
    key: 'lifeSpanState', 
    default: 1, 
});
export default lifeSpanState