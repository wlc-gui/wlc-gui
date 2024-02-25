import {atom} from 'recoil';

export const PolicyState = atom({
  key: 'policy',
  default: 'WPA + WPA2'
});

export const Layer2Policy = atom({
  key: 'layer2policy',
  default: 'WPA'
});