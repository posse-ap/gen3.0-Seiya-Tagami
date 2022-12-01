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
</head>

<body class="font-NotoSansJP">
  <!-- header -->
  <?php include(dirname(__FILE__) . '/../../components/admin/header.php') ?>
  <main>
    <!-- ユーザー登録 -->
    <div class="px-40 py-9 w-full">
      <h2 class="text-4xl font-bold">ユーザー登録</h2>
      <form action="" method="post" class="mt-8">
        <dl>
          <dt><label>名前</label></dt>
          <dd><input class="w-full p-2 bg-slate-200 text-sm mt-2" type="text" name="" placeholder="名前を入力" required /></dd>
          <dt class="mt-6"><label>Email</label></dt>
          <dd class="mt-2"><input class="w-full p-2 bg-slate-200 text-sm" type="email" name="" value="1123@gmail.com" placeholder="" disabled /></dd>
          <dt class="mt-6"><label>パスワード</label></dt>
          <dd class="mt-2"><input class="w-full p-2 bg-slate-200 text-sm" type="password" name="" placeholder="パスワードを入力" /></dd>
          <dt class="mt-6"><label>パスワード（確認）</label></dt>
          <dd class="mt-2"><input class="w-full p-2 bg-slate-200 text-sm" type="password" name="" placeholder="パスワードを再入力" /></dd>
        </dl>
        <button class="mt-8 px-6 py-[6px] bg-blue text-white font-bold text-center rounded-lg hover:shadow-md hover:shadow-slate-500 transition-all duration-200" name="upload" type="submit">作成</button>
      </form>
    </div>
    </div>
  </main>
</body>

</html>