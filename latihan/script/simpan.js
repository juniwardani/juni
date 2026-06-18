
    const supabaseUrl = 'https://hjvppgbcltgiibdxqtka.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqdnBwZ2JjbHRnaWliZHhxdGthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyNzUzNDgsImV4cCI6MjA0OTg1MTM0OH0.3X7KMHg3qMdsgYsulWxC-hGvpjkGt-9V_YTbd7PSeOw'
    const supabaseClient = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
    );
    



    // Menyimpan data ke Supabase
    document.getElementById('tombol').addEventListener('click', simpanData); // Menambahkan event click pada tombol

    // Fungsi untuk menyimpan data ke Supabase  
    async function simpanData() { 
        const nama = document.getElementById('dataNama').value;
	    const tempat = document.getElementById('tempatLahir').value;

        if (nama === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Nama wajib diisi',
            text: 'Silakan masukkan nama terlebih dahulu.'
            });
            return;
            }; // Memeriksa apakah nama sudah diisi atau tidak



            const { data, error } = await supabaseClient
            .from('latihan')
            .insert([
                { 
                nama : nama,
                tempatLahir : tempat 
                }
            ]);

        if (error) {
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Gagal menyimpan data'
            });
    console.error(error);
        } else {
            Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Data berhasil disimpan',
            showConfirmButton: false,
            timer: 1500
            });

            document.getElementById('dataNama').value = '';
	        document.getElementById('tempatLahir').value = '';
            console.log(data);
        }
    };
