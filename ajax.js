$(function(){
		var url='./goods.php';
		var option = '<option value="0">未选择</option>';
		var $sel1=$('.sel1');
		var $sel2=$('.sel2');
		var $sel3=$('.sel3');
		ajaxSelect($sel1,"0");
		function ajaxSelect($select,id){
			$.getJSON(url,{"pid":id},function(data){
				$select.html(option);
				for(var i in data){
					$select.append(createOption(data[i].id,data[i].name));
				}
			})
		}
		function createOption(value,text){
			var $option=$('<option></option>');
			$option.attr("value",value);
			$option.text(text);
			return $option;
		}
		$sel1.change(function(){
			var id = $(this).val();
			if(id==="0"){
				$sel2.html(option);
			}else{
				ajaxSelect($sel2,id);
			}
			$sel3.html(option);
		});
		$sel2.change(function(){
			var id = $(this).val();
			if(id==="0"){
				$sel3.html(option);
			}else{
				ajaxSelect($sel3,id);
			}
		});
	});