const textArea = document.querySelector(".textarea");

textArea.addEventListener('input', function handleChange(event) {

    console.log('textArea.style.min-height :>> ', textArea.style.min-height);

    // setTimeout(() => { 
    //     textArea.value = event.target.value.toLowerCase()
    //  }, 100)
    //textArea.value = event.target.value.toLowerCase()
});