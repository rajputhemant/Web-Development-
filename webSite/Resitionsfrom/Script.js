function submit(){
     const batch = document.querySelectorAll("input[name='batch']:checked");
     console.log(batch);

     let selectedBatch=[];
     document.querySelectorAll("input[name='batch']:checked").forEach((element)=>{
        selectedBatchTiming.puch(element.value);
     });
     console.log(selectedBatchTiming);

    let personName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let dob = document.getElementById("dob").value;
    let qualification = document.querySelector("qualification").value;
    let score = document.getElementById("score").value;
   
    
    let checkedCourses = [];
    document.querySelectorAll("input[name='choose']:checked").forEach((item) => {
      checkedCourses.push(item.nextSibling.textContent.trim());
    });

}