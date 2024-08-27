 // for loop on maps

 const map = new Map()
 map.set('IN',"INDIA")
 map.set('US',"USA")
 map.set('AU',"AUSTRALIA")
 map.set('BR',"BRAZIL")
 map.set('UK',"ENGLAND")
 // console.log(map)
 
 // print map using forof loop 
//    for(const key of map){
//      console.log(key)
//    }

//    map key and value

//    for(const [key,value] of map){
    
//      console.log(`key ${key}, values ${value}`)
//      //console.log(`key ${key}`)
//    }

   // ******************forin loop 

   // forin loop also work on Objects 

//    const myobject ={
//     js: 'javascript',
//     cpp:"c++",
//     rb:"Ruby",
//     swift:"swift by apple"
//    }
    
//    for(const key in myobject){
//   // console.log(key) // give only key of object
    
//    console.log(`key ${key} ,value ${myobject[key]}`)
//    } // give key and value of object 

   // ***************for in loop for arrays

//  const myarry =["EARBUD","TV","MOBILE","MOUSE"]

    // for (const [key] in myarry){

    //   //  console.log(key) // give array index or key of array
    //     console.log(`index of array ${key},value of array ${myarry[key]}`) // this will give array index and value of index 
    // }
     // Here key can hold both index and value of array, user want only index then {key} ,when user want value then  {myarray[key]}

     // foreach loop 
    
    //  const myarray = ["java","JS","MONGODB","SQL"] 
    //  myarray.forEach (function (item,index,myarray){ // this is a callbackfun no need to define function name 
    
    //      // console.log(item) // give array item 
    //       console.log(`index ${index} ,item ${item}`) // give index and item and we can easly find array length 
    //  })
     
     // **************function refrence into for each 

    //    function Myfun(item){
    //      console.log(item)
    //    }

    //    myarray.forEach(Myfun) // Here just pass the array refrence as parameter 

       // ****************** objects in arry find objets using foreach 

    //    const myObjects =[{
        
    //     languageName:"javaScript",
    //     FileName :"js"
    //    },
    //    {

    //     languageName:"java",
    //     FileName:".java"
    //    },
    //    {

    //     languageName:"python",
    //     FileName:"py"
    //    },
    //    {
       
    //     languageName:"Ruby",
    //     FileName:"Rb"
    //    }]

    //    myObjects.forEach(function (item){
    //     console.log(`file name is ${item.FileName}, and languageName ${item.languageName} }`)
    //    })

    // ************ filter use in for each loop

    // const fruits =["Apple","Banana","Peer","Grapes"]

    //      const resultFruit = fruits.filter((item)=> item=='Banana')
    //      console.log(resultFruit)

    //      // this will return the arrays values and you can 


         const books = [
            { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
            { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
            { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
            { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
            { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
            { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
            { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
            { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
            { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
          ];
        
          let book = books.filter( (bk) => bk.title ==='Book Two')
        //  console.log(book);

           book = books.filter((bk) => bk.genre ==="History")
          // console.log(book)

          book = books.filter((bk) => bk.publish >=2000 )
         // console.log(book)

         book = books.filter((bk) => bk.publish >=1995 && bk.genre == "History")
         //console.log(book)

         // **********************Maps 

    //      const myNumArray =[1,2,3,4,5,6,7,8]
    //   //     const newNum = myNumArray.map((num)=>  num + 10)
    //     // console.log(newNum)  // 11 ,12,13,14,15,16,17,18
    //    // we can apply map on each value of array
   
    //  const newNum = myNumArray
    //              .map( (num) => num+10)
    //              .map((num) => num * 10)
    //              .filter((num)=> num>= 150) 
    //             console.log(newNum)

    //    ******************** reduce method is used to reduce the the into a single value

    const ArrayNumber = [1,2,3,4]
        
        const sumofarray =  ArrayNumber.reduce( (accumulator ,currentvalue) => {
            console.log(`value of accumulator is ${accumulator}, and currentvalue is ${currentvalue}`)
              return  accumulator+currentvalue 
            },0)   // here 0 is accumulator's initial value  , value can be anything 0,10,5,anything
              
           console.log(`sum of array is ${sumofarray}`) // output is 10 , sum of array