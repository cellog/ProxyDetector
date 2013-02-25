// opera mini
function isOperaMini(ip)
{
 var components = ip.split('.');
 if (components[0] == '195' && components[1] == '189' && components[2] == '142' && Number(components[3]) >= 128 && Number(components[3]) <= 159) {
  return true;
 }
 if (components[0] == '64' && components[1] == '255' && Number(components[2]) >= 160 && Number(components[2]) < 191) {
  return true;
 }
 if (components[0] == '80')
 {
  if (components[1] == '232' && components[2] == '117') {
   return true;
  }
  if (components[1] == '239') {
   if (components[2] == '243' || components[2] == '242') {
    return true;
   }
  }
 }
 if (components[0] == '82' && components[1] == '145' && Number(components[2]) >= 208 && Number(components[2]) <= 215) {
  return true;
 }
 if (components[0] == '91' && components[1] == '203' && Number(components[2]) >= 96 && Number(components[2]) <= 99) {
  return true;
 }
 if (components[0] == '94' && components[1] == '246' && (components[2] == '126' || components[2] == '127')) {
  return true;
 }
 if (components[0] == '141' && components[1] == '0') {
  if (components[2] == '8' || components[2] == '9' || components[2] == '10' || components[2] == '11') {
   return true;
  }
 }
 return false;
}
