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

      <!-- create questions -->
      <div class="px-14 py-9 w-full">
        <h2 class="text-4xl font-bold">問題作成</h2>
        <form action="../../services/create_question.php" method="post" enctype="multipart/form-data" class="mt-8">
          <dl>
            <dt><label>問題文</label></dt>
            <dd><input class="w-full p-2 bg-slate-200 text-sm mt-2" type="text" name="question" required /></dd>
            <dt class="mt-6"><label class="">選択肢</label></dt>
            <dd class="flex flex-col gap-2 mt-2">
              <input class="w-full p-2 bg-slate-200 text-sm" type="text" name="choice[]" placeholder="選択肢１" required />
              <input class="w-full p-2 bg-slate-200 text-sm" type="text" name="choice[]" placeholder="選択肢２" required />
              <input class="w-full p-2 bg-slate-200 text-sm" type="text" name="choice[]" placeholder="選択肢３" required />
            </dd>
            <dt class="mt-6">正解の選択肢</dt>
            <dd class="flex flex-col gap-1 mt-2">
              <label><input type="radio" name="correctChoice" value="1" checked />選択肢１</label>
              <label><input type="radio" name="correctChoice" value="2" />選択肢２</label>
              <label><input type="radio" name="correctChoice" value="3" />選択肢３</label>
            </dd>
            <dt class="mt-6">問題の画像</dt>
            <dd class="mt-2"><input type="file" name="image" required/></dd>
            <dt class="mt-6">補足</dt>
            <dd class="mt-2"><input class="w-full p-2 bg-slate-200 text-sm" type="text" name="supplement" placeholder="補足テキスト"/></dd>
            <dd class="mt-2"><input class="w-full p-2 bg-slate-200 text-sm" type="text" name="supplement_url" placeholder="補足URL"/></dd>
          </dl>
          <button class="w-full mt-4 px-6 py-[6px] bg-blue text-white font-bold text-center rounded-lg hover:shadow-md hover:shadow-slate-500 transition-all duration-200" name="upload" type="submit">作成</button>
        </form>
      </div>
    </div>
  </main>
</body>

</html>