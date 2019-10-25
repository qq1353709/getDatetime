## 使用方法
```
var data=$.getDatetime();	//获取当月日历数据
var data=$.getDatetime({'date':new Date(YYYY,MM,DD)});	//指定时间的日历数据
```
## 返回数据结构
```
|-- data                           
|   |-- data  							//日历数据	array
|   	|-- 0                   		
|   		|-- year                 	//年份                 
|   		|-- month                   //月份          
|   		|-- day                     //日期        
|   		|-- week                    //星期几         
|   		|-- status                  //归属(1-当前月的,2-下个月的,3-上个月的)         
|   	|-- ...                   
|   |-- date                     		//当日或者输入日期数据	object
|   	|-- year      		            //年份    
|   	|-- month                    	//月份       
|   	|-- day                    		//日期    
```
