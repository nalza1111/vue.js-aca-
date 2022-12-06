import { myfunc, moduleB } from "./mymodule.js";
myfunc('모듈 테스트');
moduleB('모듈 테스트B')

import { myfunc as mf, moduleB as mb } from "./mymodule.js";
mf('모듈 테스트');
mb('모듈 테스트B')

import * as my from "./mymodule.js"; //두개이상임포트할 시 함수명 충돌우려
my.myfunc('모듈 테스트');
my.moduleB('모듈 테스트B')

import mc from "./mymodule.js"; //디폴트가 들어옴 디폴트는 1개만되므로 {}사용불가
mc("네번");

 //import axios from 'axios' 다운로드받은 것은 경로명이 필요없고 디폴트펑션은 사용함