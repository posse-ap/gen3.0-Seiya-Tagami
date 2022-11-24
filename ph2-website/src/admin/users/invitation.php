<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>POSSE 管理画面ダッシュボード</title>
    <link rel="stylesheet" href="../../sass/common.css" />
    <link href="../../dist/output.css" rel="stylesheet" />

    <!-- google font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />

    <!-- Font Awesome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>
  <body class="font-NotoSansJP">
    <!-- header -->
    <header class="h-20 px-[26px] py-[22px] bg-header">
      <div class="flex justify-between items-center">
        <img src="../../img/logo.svg" alt="" />
        <button class="px-6 py-[6px] bg-blue text-white font-bold rounded-lg">ログアウト</button>
      </div>
    </header>
    <main>
      <div class="flex">
        <!-- sidebar -->
        <aside class="w-48 h-[calc(100vh_-_80px)] bg-sidebar pt-10">
          <ul class="flex flex-col">
            <li class="">
              <a href="" class="flex items-center gap-3 text-lg text-white pl-4 hover:pl-5 py-3 border-t-2 border-sidebarBorder hover:bg-hoverSidebarBorder transition-all duration-300"><i class="fa-solid fa-user-plus"></i>ユーザー招待</a>
            </li>
            <li>
              <a href="../index.php" class="flex items-center gap-3 text-lg text-white pl-4 hover:pl-5 py-3 border-t-2 border-sidebarBorder hover:bg-hoverSidebarBorder transition-all duration-300"><i class="fa-sharp fa-solid fa-table-list"></i>問題一覧</a>
            </li>
            <li>
              <a href="#" class="flex items-center gap-3 text-lg text-white pl-4 hover:pl-5 py-3 border-y-2 border-sidebarBorder hover:bg-hoverSidebarBorder transition-all duration-300"><i class="fa-solid fa-marker "></i>問題作成</a>
            </li>
          </ul>
        </aside>

        <!-- invitation -->
        <div class="px-9 py-7">
          <div class="flex flex-col gap-9 ">
            <label class="text-4xl font-bold">ユーザー招待</label>
            <div class="flex items-center gap-5">
              <input type="text" class="w-96 p-2 bg-slate-300 text-sm" placeholder="メールアドレスを入力">
              <button class="px-4 py-2 bg-blue rounded-lg font-bold text-white ">送信</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>