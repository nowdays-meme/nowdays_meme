// 이미지 파일 추가하면 미리보기
/* 출처 : https://madinthe90.tistory.com/m/39 */
function readURL(input) {
  if (input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);

    // .input-origin 숨기기
    let inputOrigin = document.querySelector(".input-origin");
    inputOrigin.style.display = "none";

    // .preview에 .display-flex 클래스 추가
    let preview = document.querySelector(".preview");
    preview.classList.remove("privew");
    preview.classList.add("display-flex");
  } else {
    document.getElementById("preview").src = "";
  }
}

// input.div1 클릭하면 input.div2로 바뀜
let inputBox1 = document.querySelector(".input-box1");
let inputBox2 = document.querySelector(".input-box2");

inputBox1.addEventListener("click", function () {
  inputBox1.classList.remove("slidein");
  inputBox1.classList.add("slideout");
  inputBox2.classList.remove("slideout");
  inputBox2.classList.add("slidein");
});

//.input.div2 더블 클릭하면 input-div1으로 다시 바뀜
inputBox2.addEventListener("dblclick", function () {
  inputBox1.classList.remove("slideout");
  inputBox1.classList.add("slidein");
  inputBox2.classList.remove("slidein");
  inputBox2.classList.add("slideout");
});
