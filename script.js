function beforeSubmit() {
    debugger
    let outputDate  = document.querySelector(".outputDate")
    let inputDate  = document.querySelector(".inputDate")
    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-US")
    outputDate.value = formattedDate
    console.log(formattedDate)
}