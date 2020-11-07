$(document).ready(function () {
  var e = !1,
    a = "phone";
  $(".button").click(function () {
    $(".form").toggle(500);
  }),
    $(".method label").click(function () {
      $(this).hasClass("active") ||
        ($(".method label.active").removeClass("active"),
        $(this).addClass("active"),
        "email" === (a = $(this).attr("name"))
          ? ($(".field").val(""),
            $(".field").attr("placeholder", "email@mail.com"),
            $(".field").removeClass("egyptian_phone_field"),
            $(".egypt-flag").hide())
          : "phone" === a &&
            ($(".field").val(""),
            $(".field").attr("placeholder", "01xxxxxxxxx"),
            $(".field").addClass("egyptian_phone_field"),
            $(".egypt-flag").show()));
    }),
    $(".submit-link").click(function () {
      if (!e) {
        e = !0;
        var i = $(".field").val();
        $(".submit-link").addClass("disabled_link"),
          $(".field").addClass("disabled_input"),
          $(".field").attr("disabled", !0);
        var t =
            "https://blends-290900.firebaseio.com/coming-soon/" +
            a +
            "/list.json",
          l = { data: i };
        $.ajax({
          accept: "application/json",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          type: "POST",
          url: t,
          data: JSON.stringify(l),
          success: function (e, a) {
            $(".form").hide(500),
              $(".button").hide(500),
              $(".message").show(500);
          },
        });
      }
    });
});
