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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body class="font-NotoSansJP">
  <!-- header -->
  <?php include(dirname(__FILE__) . '/../../components/admin/header.php') ?>
  <main>
    <div class="flex">
      <!-- sidebar -->
      <?php include(dirname(__FILE__) . '/../../components/admin/sidebar.php') ?>


      <!-- invitation -->
      <div class="px-9 py-7">
        <div class="flex flex-col gap-9 ">
          <label class="text-4xl font-bold">ユーザー招待</label>
          <div class="flex items-center gap-5">
            <input type="text" class="w-96 p-2 bg-slate-300 text-sm" placeholder="メールアドレスを入力">
            <button class="px-4 py-2 bg-blue rounded-lg font-bold text-white hover:shadow-md hover:shadow-slate-600 transition-all duration-200">送信</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</body>

</html>