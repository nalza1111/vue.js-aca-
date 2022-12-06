import { myfunc, myfuna } from "./mymodule.js";
myfunc("test");

import {myfunc as mf} from "./mymodule.js";
mf("test2");

//두개이상임포트할 시 함수명 충돌우려
import * as my from  "./mymodule.js";
my.myfunc("test3");

//디폴트가 들어옴 디폴트는 1개만되므로 {}사용불가
import def from  "./mymodule.js";
def("test4")

//다운로드받은 것은 경로명이 필요없고 디폴트펑션은 사용함
import axios from 'axios'
