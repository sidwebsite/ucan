/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
;(function(){
    const menu = document.querySelector('.menu');
    menu.innerHTML = `<!-- <li class="menu-item px-3 py-4 d-block d-lg-none">
    <div class="search">
        <form>
            <div class="input-group bg-white rounded-pill overflow-hidden phone-search">
                <label for="phoneTagsKeyWords" class="visually-hidden" aria-label="關鍵字搜尋">關鍵字</label>
                <input type="text" id="phoneTagsKeyWords" class="form-control border-0" placeholder="關鍵字搜尋" aria-label="關鍵字搜尋" >
                <button type="button" class="btn btn-dark" id="phone-search-btn" title="搜尋" aria-label="關鍵字搜尋"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </form>
    </div>
</li> -->
<li class="menu-item menu-item-has-children">
    <a href="#" data-toggle="sub-menu" title="職能與職業查詢">職能與職業查詢</a>
    <ul class="sub-menu">
        <li class="menu-item"><a href="../search/search_1_1.html" title="職業查詢">職業查詢</a></li>
        <li class="menu-item"><a href="../search/search_1_2.html" title="職業性格類型查詢">職業性格類型查詢</a></li>
        <li class="menu-item"><a href="../search/search_1_3.html" title="共通職能查詢">共通職能查詢</a></li>
        <li class="menu-item"><a href="../search/search_1_4.html" title="專業職能查詢">專業職能查詢</a></li>
    </ul>
</li>
<li class="menu-item menu-item-has-children">
    <a href="#" data-toggle="sub-menu" title="職能應用">職能應用</a>
    <ul class="sub-menu">
        <li class="menu-item"><a href="../application/application_2_1_1.html" title="團測帶領">團測帶領</a></li>
        <li class="menu-item"><a href="../application/application_2_1_2.html" title="職業興趣探索診斷解讀">職業興趣探索診斷解讀</a></li>
        <li class="menu-item"><a href="../application/application_2_1_3.html" title="職場共通職能診斷解讀">職場共通職能診斷解讀</a></li>
        <li class="menu-item"><a href="../application/application_2_1_4.html" title="專業職能診斷解讀">專業職能診斷解讀</a></li>
        <li class="menu-item"><a href="../application/application_2_2_1.html" title="教學規劃發展">教學規劃發展</a></li>
        <li class="menu-item"><a href="../application/application_2_2_2.html" title="教學評估改革">教學評估改革</a></li>
        <li class="menu-item"><a href="../application/application_2_3_1.html" title="運用UCAN於校務研究">運用UCAN於校務研究</a></li>
        <li class="menu-item"><a href="../application/application_2_3_2.html" title="UCAN結合畢業生流向追蹤">UCAN結合畢業生流向追蹤</a></li>
    </ul>
</li>
<li class="menu-item menu-item-has-children">
    <a href="#" data-toggle="sub-menu" title="職能診斷">職能診斷</a>
    <ul class="sub-menu">
        <li class="menu-item"><a href="../diagnose/diagnose_3_1_1.html" title="職業興趣探索診斷">職業興趣探索診斷</a></li>
        <li class="menu-item"><a href="../diagnose/diagnose_3_2_1.html" title="職場共通職能診斷">職場共通職能診斷</a></li>
        <li class="menu-item"><a href="../diagnose/diagnose_3_3_1.html" title="專業職能診斷">專業職能診斷</a></li>
    </ul>
</li>
<li class="menu-item menu-item-has-children">
    <a href="#" data-toggle="sub-menu" title="諮詢及診斷紀錄">診斷紀錄</a>
    <ul class="sub-menu">
        <li class="menu-item"><a href="../recode/recode_4_1.html" title="職業興趣探索診斷結果">職業興趣探索診斷結果</a></li>
        <li class="menu-item"><a href="../recode/recode_4_2.html" title="職場共通職能診斷結果">職場共通職能診斷結果</a></li>
        <li class="menu-item"><a href="../recode/recode_4_4.html" title="專業職能診斷結果">專業職能診斷結果</a></li>
        <li class="menu-item"><a href="../recode/recode_4_3_1.html" title="職場共通職能能力養成計畫">職場共通職能能力養成計畫</a></li>
        <li class="menu-item"><a href="../recode/recode_4_5_1.html" title="專業職能能力養成計畫">專業職能能力養成計畫</a></li>
    </ul>
</li>
<li class="menu-item menu-item-has-children">
    <a href="#" data-toggle="sub-menu" title="認識UCAN">認識UCAN</a>
    <ul class="sub-menu">
        <li class="menu-item"><a href="../aboutUACN/aboutUACN_5_2.html" title="平台緣起及建置目的">平台緣起及建置目的</a></li>
        <li class="menu-item"><a href="../aboutUACN/aboutUACN_5_3.html" title="平台發展及依據">平台發展及依據</a></li>
        <li class="menu-item"><a href="../aboutUACN/aboutUACN_5_4.html" title="UCAN主要功能簡介">UCAN主要功能簡介</a></li>
        <li class="menu-item"><a href="../aboutUACN/aboutUACN_5_5.html" title="UCAN學校介接功能">UCAN學校介接功能</a></li>
        <li class="menu-item"><a href="../aboutUACN/aboutUACN_5_6.html" title="職能概念">職能概念</a></li>
    </ul>
</li>
<li class="menu-item d-block d-lg-none"><a href="../others/sitemap_6_1.html" title="網站導覽">網站導覽</a></li>
<li class="menu-item d-block d-lg-none"><a href="#" target="_blank" title="UCAN使用指南(另開新視窗)">UCAN使用指南</a></li>
<li class="menu-item d-block d-lg-none"><a href="../others/contactUs.html" title="聯絡我們">聯絡我們</a></li>
<li class="menu-item d-block d-lg-none"><a href="#" title="登入">登入</a></li>`;
})();
/******/ })()
;
//# sourceMappingURL=menu.js.map