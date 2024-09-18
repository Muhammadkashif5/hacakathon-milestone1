function showhide() {
    const exists = document.getElementById("hobbies")?.classList.contains("show-hobbies")
    if(exists) {
      document.getElementById("hobbies")?.classList.remove("show-hobbies")
    }else {
      document.getElementById("hobbies")?.classList.add("show-hobbies")
    }
};