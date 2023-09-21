import Discover from "./Discover/Discover";
import User from './User/User'
import Notify from "./Notify/Notify";
import Search  from "./Search/Search"
import React from "react";

const Wallet= React.lazy(()=>import('./Wallet/Wallet'))
export  {Discover,User,Search,Wallet,Notify}