function parity(num) {
    var arr = num.toString();
    var index = arr.indexOf('-');
    if (index > 0) {
        arr = arr.substring(0, index).contact(arr.substring(index + 1));
    }
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += (parseInt(arr.charAt(i)));
    }
    var bit1 = parseInt(sum / 10);
    var parity;
    if (sum % 10 == 0) {
        parity = 0;
    } else {
        parity = (bit1 + 1) * 10 - sum;
    }
    arr += parity.toString();
    return arr;
}
function barcode(num, postConvertTab) {
    var post = parity(num);
    var barcode = '';
    for (var i = 0; i < post.length; i++) {
        var post_elem = parseInt(post.charAt(i));
        barcode += postConvertTab[post_elem] + '\t';
    }
    barcode = '|\t'+ barcode + '|'
    return  barcode ;
}
function postcode(str, postConvertTab) {
    var bar = str.split("\t");
    var len = bar.length;
    bar = bar.slice(1,len-1);
    var post = '';
    bar.forEach(bar => {
        post += postConvertTab.indexOf(bar).toString();
    });
    post = post.substring(0, post.length - 1);
    if (post.length > 5) {
        post = post.substring(0, 5) + '-' + post.substring(5);
    }
    return post;
}

function main(param){
    var postConvertTab = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:',
        ':||::', '|:::|', '|::|:', '|:|::'];
    if (typeof param == 'number') {
        return barcode(param, postConvertTab);
    }
    return postcode(param, postConvertTab);
}
module.exports = main;