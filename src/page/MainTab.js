import React from 'react'
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from "./bottom/HomeScreen";
import HotShowScreen from "./bottom/HotShowScreen";
import RankListScreen from "./bottom/RankListScreen";
import MineScreen from "./bottom/MineScreen";

export const MainTab=createBottomTabNavigator(
    {
        Home:HomeScreen,
        HotShow:HotShowScreen,
        RankList:RankListScreen,
        Mine:MineScreen
    },

    {
        tabBarOptions:{
            activeTintColor:'#00BD30',  //当前选中的tab bar的文本颜色和图标颜色
            inactiveTintColor:'gray',   //当前未选中的tab bar的文本颜色和图标颜色
            showIcon:true,              //是否显示tab bar的图标，默认是false
            showLabel:true,           //showLabel - 是否显示tab bar的文本，默认是true

            //tab bar的样式
            style:{
                backgroundColor:'#fff',
                paddingBottom:1,
                borderTopWidth:0.2,
                paddingTop:1,
                borderTopColor:'#ccc'
            },
            //tab bar的文本样式
            labelStyle:{
                fontSize:11,
                margin:1
            },
            tabStyle:{
                height:45
            },
            indicatorStyle:{
                height:0
            }

        }
    }
);