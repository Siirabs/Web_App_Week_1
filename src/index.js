if (document.readyState !== "loading") {
  console.log("Document is ready");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const addCommentButton = document.getElementById("add-comment");

  addCommentButton.addEventListener("click", function () {
    const writeArea = document.getElementById("write-area");

    writeArea.innerHTML =
      writeArea.innerHTML + (Math.random() + 1).toString(36);
    var li = document.createElement("LI");

    li.innerHTML = writeArea.value;
    writeArea.value = "";
    document.getElementById("comments").appendChild(li);
  });

  const removeCommentsButton = document.getElementById("remove-comments");

  removeCommentsButton.addEventListener("click", function () {
    var r = window.confirm("Are you sure?");
    if (r === true) {
      document.getElementById("comments").innerHTML = "";
    } else {
      console.log("Removing comments cancelled by user");
    }
  });
}
