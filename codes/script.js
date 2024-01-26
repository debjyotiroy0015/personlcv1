let aboutMeImage = document.querySelector(".about-pics");
let aboutMeExp = document.querySelector(".exp");
let aboutMeSkill = document.querySelector(".skill");
let aboutMeEdu = document.querySelector(".edu");

aboutMeSkill.addEventListener("click", () => {
  aboutMeImage.style.backgroundImage = "url('skill.jpeg')";
  aboutMeExp.setAttribute("class", "exp");
  aboutMeSkill.setAttribute("class", "skill orange");
  aboutMeEdu.setAttribute("class", "edu");
  document.querySelector(".skill-detail").setAttribute("class", "skill-detail");
  document
    .querySelector(".exp-detail")
    .setAttribute("class", "exp-detail hide");
  document
    .querySelector(".edu-detail")
    .setAttribute("class", "edu-detail hide");
});
aboutMeExp.addEventListener("click", () => {
  aboutMeImage.style.backgroundImage = "url('experience.jpeg')";
  aboutMeExp.setAttribute("class", "exp orange");
  aboutMeSkill.setAttribute("class", "skill");
  aboutMeEdu.setAttribute("class", "edu");
  document
    .querySelector(".skill-detail")
    .setAttribute("class", "skill-detail hide");
  document.querySelector(".exp-detail").setAttribute("class", "exp-detail");
  document
    .querySelector(".edu-detail")
    .setAttribute("class", "edu-detail hide");
});
aboutMeEdu.addEventListener("click", () => {
  aboutMeImage.style.backgroundImage = "url('education.jpeg')";
  aboutMeExp.setAttribute("class", "exp");
  aboutMeSkill.setAttribute("class", "skill");
  aboutMeEdu.setAttribute("class", "edu orange");
  document
    .querySelector(".skill-detail")
    .setAttribute("class", "skill-detail hide");
  document
    .querySelector(".exp-detail")
    .setAttribute("class", "exp-detail hide");
  document.querySelector(".edu-detail").setAttribute("class", "edu-detail");
});
