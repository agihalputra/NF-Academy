<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Penilaian Ujian</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h1>Form Penilaian Ujian</h1>

    <form method="POST" action="">
        <div class="form-group">
            <label for="nama">Nama:</label>
            <input type="text" id="nama" name="nama" placeholder="Masukkan nama anda" required>
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Masukkan email anda" required>
        </div>

        <div class="form-group">
            <label for="nilai">Nilai Ujian:</label>
            <input type="number" id="nilai" name="nilai" placeholder="Masukkan nilai ujian" required>
        </div>

        <button type="submit" name="submit">Kirim</button>
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $nama = htmlspecialchars($_POST['nama']);
        $email = htmlspecialchars($_POST['email']);
        $nilai = (int) $_POST['nilai'];

        if ($nilai > 70) {
            $status = "Lulus 🎉";
            $statusClass = "lulus";
        } else {
            $status = "Remedial 😥";
            $statusClass = "remedial";
        }

        echo "<div class='result'>";
        echo "<h2>Hasil Penilaian</h2>";
        echo "<p><strong>Nama:</strong> $nama</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Nilai:</strong> $nilai</p>";
        echo "<p class='status $statusClass'>$status</p>";
        echo "</div>";
    }
    ?>
</div>

</body>
</html>
