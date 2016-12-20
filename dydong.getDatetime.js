/*
**	http://www.dydong.com
**	auther	dong
**	$.getDatetime({})
*/
(function($){
	
	var datetime=function(date,options){
		
		this.week=["日","一","二","三","四","五","六"],
		this.options={
			"date":date,
			"data":[] //日期数组
		};
		$.extend(this.options,options); 
	}
	
	datetime.prototype={
		init:function(){
			//当前时间
			this.date = {
				"year" : this.options["date"].getFullYear(),
				"month" :this.options["date"].getMonth()+1,
				"day" : this.options["date"].getDate()
			}
			
			if(this.date["month"]==1){this.date["month_pre"]=12;this.date["year_pre"]=this.date["year"]-1;}else{this.date["month_pre"]=this.date["month"]-1;this.date["year_pre"]=this.date["year"];} //上一个月
			if(this.date["month"]==12){this.date["month_next"]=1;this.date["year_next"]=this.date["year"]+1;}else{this.date["month_next"]=this.date["month"]+1;this.date["year_next"]=this.date["year"];} //下一个月
			
			var day_first = new Date(this.date["year"],this.date["month"]-1).getDay(),//获取本月第一天是星期几
    		 	day_mun =new Date(this.date["year"],this.date["month"],0).getDate(),//当月总共的天数
    		 	day_pre_mun =new Date(this.date["year_pre"],this.date["month_pre"],0).getDate(),//上月月总共的天数
				day_next_mun =new Date(this.date["year_next"],this.date["month_next"],0).getDate(),//下月月总共的天数
				day_all_mun=7-(day_first+day_mun)%7+day_mun+day_first;	//需要展现的天数
			//拼装数组
			for(var i=0;i<day_all_mun;i++){
				var year,month,day,week,status,now=0;
				if(i<day_first){	//上月的日期
					year=this.date["year_pre"];
					month=this.date["month_pre"];
					day=day_pre_mun-day_first+i+1;
					status=3;
				}
				else if(i>=(day_first+day_mun)){	//下月的日期
					year=this.date["year_next"];
					month=this.date["month_next"];
					day=i-day_first-day_mun+1;
					status=2;
				}
				else{	//当前月日期
					year=this.date["year"];
					month=this.date["month"];
					day=i-day_first+1;
					status=1;
					if(year==this.date["year"]&&month==this.date["month"]&&day==this.date["day"])now=1;
				}
				week=this.week[i%7];
				
				this.options["data"][i]={"year":year,"month":month<10?"0"+month:month,"day":day<10?"0"+day:day,"week":week,"status":status}
			}
			
			this.options["date"]={
				"year" : this.date.year,
				"month" :this.date.month<10?"0"+this.date.month:this.date.month,
				"day" : this.date.day<10?"0"+this.date.day:this.date.day
			};
			return this.options;
		}
		
	}
	$.extend({
		getDatetime:function(options){
			options=options||{};
			if(options["date"])options["date"]["month"]-=1;
			var date=options["date"]||new Date();
			var objs = new datetime(date,options); 
			return objs.init();
		}
	});
})(jQuery);
