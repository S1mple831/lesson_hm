function longestPalindrome (s) {
    if (s.length < 2 )return s;

    let start = 0,
        maxLength = 1;
     function expandAroundCenter(left,right){
        // 往四周去扩
        while(left >= 0 && right < s.length && s[left] ===s[right] ){
            if(right - left + 1 > maxLength){
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }
    // 最小的回文 一个字符 左边和右边相等 字符串是奇数个
    // 两个字符 字符串是偶数个
    for (let i = 0; i < s.length; i++){
        expandAroundCenter(i,i);// 最小的回文 一个字符 左边和右边相等 字符串是奇数个
        expandAroundCenter(i,i+1);// 两个字符 字符串是偶数个 
    }
    return s.substring(start,start + maxLength);
}