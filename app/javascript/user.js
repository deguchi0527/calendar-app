$(function() {
  // アイコンをクリックするとプルダウンを表示/非表示にする
  $('#user-icon').on('click', function() {
    const $userProfile = $('.user-profile');
    if ($userProfile.css('display') == 'block') {
      $userProfile.css('display', 'none');
    } else {
      $userProfile.css('display', 'block');
    }
  });
});