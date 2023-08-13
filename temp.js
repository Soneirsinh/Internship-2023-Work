// str = "soneir";
// stack = [] 

// let len  =str.length
// console.log(len);

// const arr = [1,2,3,4,5]
// let json = JSON.stringify(arr)
// // console.log(Array.isArray(arr));
// localStorage.setItem('Array', json)

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Local Storage Example</title>
// </head>
// <body>
//     <script>
        const arr = [1, 2, 3, 4, 5];

        if (Array.isArray(arr))
        {
            const json = JSON.stringify(arr);
            localStorage.setItem('myArrayData', json);
            console.log('Array stored in local storage successfully.');
        } else {
            console.log('arr is not an array.');
        }
//     </script>
// </body>
// </html>
