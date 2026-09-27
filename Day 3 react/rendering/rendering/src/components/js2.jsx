

    
    let longestPalindrome = (s)=>{
        if(data(s)){
            console.log("Palindrome")
        }
        else{
            console.log("Not a Palindrome")
        }
        let current =""
        for(i=0;i<s.length;i++){
            for(j=i+1; j<=s.length; j++){
                let ss = s.substring(i,j)
                console.log(ss)
                if(data(ss)){
                    if(ss.length>current.length){
                        current = ss
                    }
                }
            }
        }
        return current+" "+"is a Substring Palindrome"
    }

    const data =(s)=>{
        let reverse = s.split("").reverse().join("")
        if(s==reverse)
    {
        return true
    }
    else{
        return false
    }
    }
    console.log(longestPalindrome("babadabsss"))


    