$("#nav-icon1").click(function() {
  $(this).toggleClass("open");
  $("nav").toggleClass("displayBlock");
});

document.addEventListener("DOMContentLoaded", () => {
  //init();

  document.querySelector(".arrow").addEventListener("click", e => {
    window.scroll({
      top: 700,
      left: 0,
      behavior: "smooth"
    });
  });

  const blogWrapper = document.querySelectorAll(".blog-wrapper");

  blogWrapper.forEach(blog => {
    blog.addEventListener("click", function() {
      // blogWrapper.forEach(blogwrap => {
      // 	blogwrap.querySelector('.blog-blurb').classList.add('line-clamp')
      // })
      blog.querySelector(".blog-blurb").classList.toggle("line-clamp");
    });
  });
});

function init() {
  // set cookie for cookie policy

  const cookieBanner = document.querySelector("#js-cookie");

  const checkCookieValue = () => {
    if (
      document.cookie
        .split(";")
        .filter(item => item.trim().startsWith("cookieAgree=")).length
    ) {
      // do not show cookie
      console.log("no need to do anything");
    } else {
      // show cookie
      console.log("show cookie banner");
      cookieBanner.classList.add("show-cookie-banner");
    }
  };

  const acceptButton = document.querySelector("#js-cookie_accept");

  acceptButton.addEventListener("click", function() {
    document.cookie = "cookieAgree=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    cookieBanner.classList.remove("show-cookie-banner");
  });

  checkCookieValue();
}
