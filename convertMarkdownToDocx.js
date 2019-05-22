
//HACK: could not get this to work - issue spawning pandoc process

//Use this instead:
//> C:\Workspaces\git-repos\agility-docs\guides>pandoc -o "../dist/guides/How you can Work with Agility Content.docx" -f markdown -t docx "How you can Work with Agility Content.md"

/*
pandoc -o "../dist/guides/Creating Re-usable Content.docx" -f markdown -t docx "Creating Re-usable Content.md"
pandoc -o "../dist/guides/Develop and Deploy Faster.docx" -f markdown -t docx "Develop and Deploy Faster.md"
pandoc -o "../dist/guides/How you can Work with Agility Content.docx" -f markdown -t docx "How you can Work with Agility Content.md"
pandoc -o "../dist/guides/Managing Scripts and Styles in your Rich Text Areas.docx" -f markdown -t docx "Managing Scripts and Styles in your Rich Text Areas.md"
pandoc -o "../dist/guides/Sharing Common Functionality Across Properties.docx" -f markdown -t docx "Sharing Common Functionality Across Properties.md"
pandoc -o "../dist/guides/Why you Should be Using Content Workflows.docx" -f markdown -t docx "Why you Should be Using Content Workflows.md"
*/



// var fs = require('fs');
// var nodePandoc = require('node-pandoc');

// var walkPath = './guides';


// var callback = function(err, result) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Successfully converted file');
//     }
    
//     return result;
// }

// var walk = function (dir, done) {
//     fs.readdir(dir, function (error, list) {
//         if (error) {
//             return done(error);
//         }

//         var i = 0;

//         (function next () {
//             var file = list[i++];

//             if (!file) {
//                 return done(null);
//             }
            
//             file = dir + '/' + file;
            
//             fs.stat(file, function (error, stat) {
//                 if (stat && stat.isDirectory()) {
//                     walk(file, function (error) {
//                         next();
//                     });
//                 } else {
//                     // do stuff to file here
//                     var fileNameNoExtension = file.replace(walkPath + '/', '').replace('.md', '');
//                     var args = '-f markdown -t docx -o \"./dist/guides/' + fileNameNoExtension + '.docx\"';
                    
//                     try {
//                         debugger;
//                         nodePandoc(file, args, callback);
//                     } catch {
//                         console.error('error occurred');
//                     }

//                     next();
//                 }
//             });
//         })();
//     });
// };

// // optional command line params
// //      source for walk path
// process.argv.forEach(function (val, index, array) {
//     if (val.indexOf('source') !== -1) {
//         walkPath = val.split('=')[1];
//     }
// });

// console.log('-------------------------------------------------------------');
// console.log('processing...');
// console.log('-------------------------------------------------------------');

// walk(walkPath, function(error) {
//     if (error) {
//         throw error;
//     } else {
//         console.log('-------------------------------------------------------------');
//         console.log('finished.');
//         console.log('-------------------------------------------------------------');
//     }
// });