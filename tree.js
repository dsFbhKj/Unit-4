// Javascript program to remove
// vowels from a String
function remVowel(str)
{
    let al = [ 'a', 'e', 'i', 'o', 'u',
               'A', 'E', 'I', 'O', 'U' ];
    let result = "";
     
    for(let i = 0; i < str.length; i++)
    {
         
        if (!al.includes(str[i]))
        {
            result += str[i];
        }
    }
    return result;
}
 
// Driver code
let str = "GeeeksforGeeks - A Computer Science " +
          "Portal for Geeks";
document.write(remVowel(str));
 
// This code is contributed by rag2127
