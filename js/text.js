(function ($) {
  /**
   * span-letters.js
   *
   * Example usage: jQuery('.selector').spanLetters();
   */
  $.fn.spanLetters = function () {
    // 이 함수가 호출된 각 요소를 루프합니다.
    this.each(function () {
      // 변수 범위 지정
      let words, i, text;

      // 문자열의 각 문자를 값으로 배열 만들기
      words = $(this).text().split("");

      // 글자를 반복하여 한 칸에 한 칸씩
      for (i = 0; i in words; i++) {
        words[i] =
          '<span class="sl' + (i + 1) + ' span-letter">' + words[i] + "</span>";
      }

      // 스팬으로 포장된 문자를 문자열로 다시 연결
      text = words.join("");

      // 원래 문자열을 새 문자열로 바꿉니다
      $(this).html(text);
    });
  };
})(jQuery);

$(".the-goods").spanLetters();
