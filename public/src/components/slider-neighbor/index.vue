<template>
	<div style="flex-direction: column; background-color: #ffffff;width:750;height:600;border-width: 0;">
		<div style="width:700px;height:400px; border-width:1px; border-style:solid; border-color:#000000;margin:0;">
		<slider-neighbor style="width:700px;height:400px;" neighbor-scale="0.8" neighbor-space="30" current-item-scale="0.90" interval="3000" neighbor-alpha="0.8" :auto-play="attr_auto_play">
				<image style="width:600px;background-color:#FFFFDF;height:400px;" src="https://gw.alicdn.com/tps/TB1dzanMVXXXXXQXVXXXXXXXXXX-573-412.png"></image>
				<image style="width:600px;background-color:#FFFFDF;height:400px;" src="https://gw.alicdn.com/tps/TB1p9CCMVXXXXa_XFXXXXXXXXXX-450-340.png"></image>
				<image style="width:600px;background-color:#FFFFDF;height:400px;" src="https://gw.alicdn.com/tps/TB1zpSiMVXXXXchXFXXXXXXXXXX-448-338.png"></image>
				<image style="width:600px;background-color:#FFFFDF;height:400px;" src="https://gw.alicdn.com/tps/TB1EuGIMVXXXXcoXpXXXXXXXXXX-452-337.png"></image>
			<indicator style="height:60px;position:absolute;bottom:15px;width:700px;left:0px;itemSelectedColor:#0000FF;itemSize:20;itemColor:#FF0000;"></indicator>
		</slider-neighbor>
		</div>
		<div style="height:100px; border-width:1px; margin:10px;">
			<!--<TC_Support_SubTitle title="auto-play"></TC_Support_SubTitle>-->
			<div v-for="item in btnList2100" style="flex-direction:row; border-width: 1px;" >
				<text @click="update2100" :flagid="i.index"  v-for="i in item.row" :style="{ backgroundColor: i.bgc }" style="width:310px; height:50px;text-align: center; border-width: 1px;border-color: #696969;border-style:solid;border-radius:5px; margin:10px;">auto play: {{i.value}}</text>
			</div>

			<!--<div v-for="item in [1]" style="flex-direction:row; border-width: 1px; height: 30px; width: 100px" >-->
				<!--<text>hello</text>-->
				<!--&lt;!&ndash;<text @onclick="update2100" :flagid="index"  v-for="(value, bgc, index) in item.row" :style="{ backgroundColor: bgc }" style="width:310px; height:50px;text-align: center; border-width: 1px;border-color: #696969;border-style:solid;border-radius:5px; margin:10px;">auto play: {{value}}</text>&ndash;&gt;-->
			<!--</div>-->
		</div>
	</div>
</template>


<script>
	module.exports = {
		data(){
		    return {
				log_detail:[],
				attr_auto_play:false,
				btnList2100:[
					{
						row:
						[
							{value: "false",bgc:'#EEEEEE',index:0},
							{value: "true",bgc:'#EEEEEE',index:1},
						],
					},
				]
            }
		},
		methods : {
			update2100: function (e) {
			    console.log('update2100')
				var self = this
				var index = e.target.attr.flagid
				for (var i = 0; i < self.btnList2100.length; i++) {
					var row = self.btnList2100[i];
					var columnlist = row.row;
					for (var j = 0; j < columnlist.length; j++) {
						var column = columnlist[j];
						if (column.index === index) {
							column.bgc = '#B2DFEE'
							switch (index) {
								case 0:
									self.attr_auto_play=false;
									break;
								case 1:
									self.attr_auto_play=true;
									break;
								default:
									break;
							}
						}
						else {
							column.bgc = '#EEEEEE'
						}
					}
				}
			},
		},
	}
</script>
