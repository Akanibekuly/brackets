module.exports = function check(str, bracketsConfig) {
  const bracketsMap=new Map(bracketsConfig);
  console.log(bracketsMap)
  for(var i=0;i<str.length;i++){
    if(i==str.length-1){
      return false;
    }
    if(bracketsMap.get(str.charAt(i))){
      if(bracketsMap.get(str.charAt(i))==str.charAt(i+1)){
        str=str.substr(0,i)+str.substr(i+2)
        // console.log(str+'\n')
        return check(str,bracketsConfig);
      }
    } else{
      return false;
    }
  }

  if (str==''){
    return true;
  }
  return false;
}
