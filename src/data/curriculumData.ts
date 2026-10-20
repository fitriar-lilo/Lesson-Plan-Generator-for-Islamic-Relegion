import { TopicItem } from '../types/lessonPlan';

export const CURRICULUM_DATA: TopicItem[] = [
  // ==========================================
  // YEAR 10 (FASE E)
  // ==========================================
  {
    id: 'y10-matrikulasi-fiqih',
    chapterNumber: 'Matrikulasi Fiqih',
    title: 'Thaharah dan Shalat',
    yearGroup: 'Year 10',
    subtopics: [
      {
        id: 'y10-m-thaharah-wudhu',
        title: 'Thaharah, Syarat, Rukun, Sunnah, dan Pembatal Wudhu',
        objectives: [
          {
            id: 'obj-y10-m-1',
            text: 'Peserta didik dapat menjelaskan pengertian thaharah; menyebutkan syarat, rukun, sunah, dan hal yang membatalkan wudhu.'
          },
          {
            id: 'obj-y10-m-2',
            text: 'Peserta didik dapat mempraktikkan wudhu dengan benar sesuai sunnah Rasulullah ﷺ.'
          },
          {
            id: 'obj-y10-m-3',
            text: 'Peserta didik dapat mengidentifikasi dan memperbaiki kesalahan dalam wudhu; menghafal bacaan doa sebelum dan sesudah wudhu.'
          }
        ],
        defaultWalt: [
          'Memahami hakikat thaharah dan kaidah bersuci dalam Islam',
          'Menguasai syarat, rukun, sunnah, serta hal-hal yang membatalkan wudhu',
          'Mendemonstrasikan tata cara wudhu yang tertib dan sempurna sesuai sunnah'
        ],
        defaultWilf: [
          'Saya dapat menyebutkan 4 rukun wudhu yang termaktub dalam Q.S. al-Maidah ayat 6.',
          'Saya dapat membedakan antara hadas kecil dan hadas besar beserta cara menyucikannya.',
          'Saya dapat mempraktikkan wudhu secara berurutan dan mengoreksi 3 kekeliruan umum saat berwudhu.'
        ],
        defaultSlo: [
          'Peserta didik mampu melaksanakan tata cara bersuci (wudhu) secara tartil dan presisi sesuai kaidah fikih mazhab Syafi\'i serta sunnah Nabi ﷺ.'
        ],
        clilTerms: [
          { term: 'Thaharah', arabic: 'الطَّهَارَةُ', definition: 'Mensucikan diri dari hadas dan najis agar sah melaksanakan ibadah shalat.' },
          { term: 'Rukun Wudhu', arabic: 'أَرْكَانُ الْوُضُوءِ', definition: 'Unsur pokok dalam berwudhu yang wajib ditunaikan, jika ditinggalkan wudhu tidak sah.' },
          { term: 'Tartib', arabic: 'التَّرْتِيبُ', definition: 'Melaksanakan rukun wudhu secara berurutan dari membasuh wajah hingga membasuh kaki.' }
        ],
        ealVocabulary: [
          { term: 'Ablution', arabic: 'وُضُوءٌ', indonesian: 'Wudhu / Bersuci', hint: 'Ritual purification before prayer' },
          { term: 'Purity', arabic: 'طَهَارَةٌ', indonesian: 'Kebersihan / Kesucian', hint: 'Spiritual and physical cleanliness' }
        ],
        struggledScaffold: {
          title: 'Panduan Praktik Bertahap Wudhu',
          strategies: [
            'Menyediakan kartu infografis bergambar urutan 6 rukun wudhu (Niat, Wajah, Tangan, Sebagian Kepala, Kaki, Tertib).',
            'Model peer-tutoring: siswa berpasangan saling mengamati dan memberi checklist rukun wudhu.'
          ],
          scaffoldGuidance: 'Fokuskan pemahaman siswa terlebih dahulu pada rukun fardhu (4 basuhan + niat & tertib) sebelum memperdalam sunnah-sunnahnya.'
        },
        ealSupport: {
          title: 'Kosakata & Kartu Visual Fiqih Thaharah',
          visualSupport: 'Bagan klasifikasi air (mutlak, musta\'mal, mutanajjis) dengan label dwibahasa Arab-Indonesia.',
          starterPrompts: [
            'Rukun wudhu terdiri dari ... perkara utama.',
            'Perbedaan hadas dan najis adalah ...'
          ]
        },
        extensionChallenge: {
          title: 'Analisis Fiqih Kontemporer Penggunaan Air',
          challengeTask: 'Membuat telaah fikih ekologis mengenai batas penggunaan air saat berwudhu (larangan israf air) dan hukum berwudhu dengan air keran modern.',
          realWorldContext: 'Penerapan green-fiqh dan efisiensi sumber daya air di masjid sekolah berstandar ramah lingkungan.'
        },
        default5E: {
          starterStimulus: 'Video singkat tata cara wudhu Rasulullah ﷺ dan studi kasus pembatalan wudhu karena sentuhan kulit menurut lintas mazhab.',
          engage: 'Apersepsi diagnostik: Siswa menuliskan 3 hal yang sering membingungkan tentang wudhu di sticky notes.',
          explore: 'Simulasi kelompok: Mengidentifikasi status kesucian air dan mengurutkan kartu rukun wudhu.',
          explain: 'Penjelasan dalil Q.S. al-Mā’idah/5:6, perbedaan rukun dan sunnah, serta demonstrasi langsung.',
          elaborate: 'Praktik wudhu mandiri di tempat wudhu sekolah dengan lembar observasi peer-assessment.',
          evaluate: 'Exit ticket: Tuliskan 2 rukun wudhu yang tidak boleh terbalik urutannya dan jelaskan alasannya.'
        }
      },
      {
        id: 'y10-m-shalat-rukun',
        title: 'Syarat Sah, Rukun, Sunnah, dan Pembatal Shalat serta Praktik',
        objectives: [
          {
            id: 'obj-y10-m-4',
            text: 'Peserta didik dapat menyebutkan syarat sah, rukun, sunah shalat, dan hal yang membatalkan shalat.'
          },
          {
            id: 'obj-y10-m-5',
            text: 'Peserta didik dapat mempraktikkan shalat lima waktu dengan benar sesuai sunnah.'
          },
          {
            id: 'obj-y10-m-6',
            text: 'Peserta didik dapat mengidentifikasi dan memperbaiki kesalahan dalam shalat; menghafal bacaan wajib.'
          }
        ],
        defaultWalt: [
          'Memahami rukun qauli dan fi\'li dalam pelaksanaan shalat lima waktu',
          'Mendalami konsep thuma\'ninah sebagai rukun esensial shalat',
          'Mempraktikkan shalat fardhu dengan bacaan fasih dan gerakan yang benar'
        ],
        defaultWilf: [
          'Saya dapat mengklasifikasikan rukun shalat ke dalam rukun qalbi, qauli, dan fi\'li.',
          'Saya dapat melafalkan takbiratul ihram, surah al-Fatihah, dan tasyahhud akhir dengan makhraj yang benar.',
          'Saya dapat menunjukkan posisi thuma\'ninah saat ruku\', i\'tidal, dan sujud.'
        ],
        defaultSlo: [
          'Peserta didik mampu melaksanakan shalat fardhu secara khusyuk, tertib, dan memenuhi seluruh syarat dan rukun syar\'i.'
        ],
        clilTerms: [
          { term: 'Thuma\'ninah', arabic: 'الطُّمَأْنِينَةُ', definition: 'Ketenangan diam sejenak setelah seluruh anggota badan berada pada posisi rukun shalat.' },
          { term: 'Rukun Qauli', arabic: 'الرُّكْنُ الْقَوْلِيُّ', definition: 'Rukun shalat berupa ucapan yang wajib didengar minimal oleh telinga sendiri.' },
          { term: 'Khusyuk', arabic: 'الْخُشُوعُ', definition: 'Kehadiran hati dan kerendahan jiwa di hadapan keagungan Allah Swt. saat mendirikan shalat.' }
        ],
        ealVocabulary: [
          { term: 'Prayer', arabic: 'صَلَاةٌ', indonesian: 'Shalat', hint: 'Second pillar of Islam' },
          { term: 'Prostration', arabic: 'سُجُودٌ', indonesian: 'Sujud', hint: 'Placing forehead on ground' }
        ],
        struggledScaffold: {
          title: 'Checklist Rukun Shalat',
          strategies: [
            'Bagan alur 13 rukun shalat dengan penanda warna (merah: qauli, hijau: fi\'li, biru: qalbi).',
            'Pendampingan bacaan wajib shalat dengan audio tartil.'
          ],
          scaffoldGuidance: 'Pastikan siswa menghafal rukun qauli pokok (Al-Fatihah, Tasyahhud Akhir, Shalawat, Salam) dengan lafal yang benar.'
        },
        ealSupport: {
          title: 'Kartu Posisi & Makna Bacaan Shalat',
          visualSupport: 'Poster gerakan ruku\', i\'tidal, sujud, dan duduk di antara dua sujud dengan transliterasi.',
          starterPrompts: [
            'Syarat sah shalat harus dipenuhi ... memulai shalat.',
            'Thuma\'ninah diukur sekurang-kurangnya selama membaca ...'
          ]
        },
        extensionChallenge: {
          title: 'Kajian Fiqih Shalat dalam Kondisi Khusus (Rukhshah)',
          challengeTask: 'Membuat panduan shalat jamak-qashar saat safar dan shalat bagi orang sakit di rumah sakit/pesawat terbang.',
          realWorldContext: 'Kesiapan mobilitas global siswa Semesta saat bepergian ke luar negeri atau mengikuti kompetisi sains internasional.'
        },
        default5E: {
          starterStimulus: 'Kutipan hadis Nabi ﷺ: "Shalatlah kalian sebagaimana kalian melihat aku shalat" (HR. Bukhari).',
          engage: 'Tanya jawab cepat: Apa perbedaan antara syarat sah shalat dan rukun shalat?',
          explore: 'Praktik peragaan gerakan shalat di kelas dan saling mengoreksi posisi sujud serta takbir.',
          explain: 'Kajian rincian 13 rukun shalat dan pentingnya thuma\'ninah.',
          elaborate: 'Studi kasus: Apa yang harus dilakukan makmum jika lupa membaca tahiyyat awal atau ragu jumlah rakaat?',
          evaluate: 'Exit ticket: Tuliskan 3 hal yang membatalkan shalat dan 1 rukun shalat fi\'li.'
        }
      }
    ]
  },
  {
    id: 'y10-bab1',
    chapterNumber: 'Bab 1',
    title: 'Meraih Kesuksesan dengan Kompetisi dalam Kebaikan (Plus Waqof dan Washol)',
    yearGroup: 'Year 10',
    subtopics: [
      {
        id: 'y10-b1-st1',
        title: 'Membaca, Menulis, dan Menghafal Q.S. al-Maidah/5:48 serta Tajwid Wakaf & Washal',
        objectives: [
          {
            id: 'obj-y10-b1-1',
            text: 'Peserta didik mampu membaca, menulis, dan menghafal Q.S. al-Maidah/5:48 dengan tartil.'
          },
          {
            id: 'obj-y10-b1-4',
            text: 'Peserta didik mampu memahami hukum bacaan wakaf dan wasal.'
          }
        ],
        defaultWalt: [
          'Membaca Q.S. al-Mā’idah/5:48 secara tartil dengan kaidah tajwid yang benar',
          'Mengidentifikasi tanda-tanda wakaf (lazim, jaiz, mamnu\') dan washal dalam mushaf Al-Qur\'an',
          'Menuliskan ayat dan menghafalkan lafal kunci fastabiqul khairat'
        ],
        defaultWilf: [
          'Saya dapat membaca Q.S. al-Mā’idah/5:48 tanpa terbata-bata sesuai makharijul huruf.',
          'Saya dapat menunjukkan minimal 3 tanda wakaf pada ayat dan menjelaskan cara membacanya.',
          'Saya dapat menuliskan potongan ayat فَاسْتَبِقُوا الْخَيْرَاتِ dengan kaidah khat naskhi.'
        ],
        defaultSlo: [
          'Peserta didik mampu melafalkan, menuliskan, dan menghafalkan Q.S. al-Mā’idah/5:48 secara fasih serta menerapkan kaidah waqaf dan washal secara konsisten.'
        ],
        clilTerms: [
          { term: 'Waqaf', arabic: 'الْوَقْفُ', definition: 'Menghentikan bacaan Al-Qur\'an sejenak pada akhir kata untuk bernafas dengan niat melanjutkan kembali.' },
          { term: 'Washal', arabic: 'الْوَصْلُ', definition: 'Menyambungkan bacaan ayat Al-Qur\'an dengan ayat berikutnya tanpa menghentikan nafas.' },
          { term: 'Fastabiqul Khairat', arabic: 'فَاسْتَبِقُوا الْخَيْرَاتِ', definition: 'Bersegera dan berlomba-lomba dalam mengerahkan segala potensi untuk berbuat kebajikan.' }
        ],
        ealVocabulary: [
          { term: 'Compete in goodness', arabic: 'مُنَافَسَةٌ فِي الْخَيْرِ', indonesian: 'Berlomba dalam kebaikan', hint: 'Racing towards righteous deeds' },
          { term: 'Stop sign (Tajweed)', arabic: 'عَلَامَةُ الْوَقْفِ', indonesian: 'Tanda Wakaf', hint: 'Punctuation rule in Quranic recitation' }
        ],
        struggledScaffold: {
          title: 'Panduan Tajwid Bertahap',
          strategies: [
            'Memberikan teks ayat dengan tanda warna pembeda waqaf (warna hijau untuk boleh berhenti, merah untuk dilarang berhenti).',
            'Latihan talaqqi bersama guru kata demi kata sebelum membaca satu ayat utuh.'
          ],
          scaffoldGuidance: 'Gunakan metode potong ayat per frasa (tahfizh juz \'Amma style) untuk memudahkan hafalan.'
        },
        ealSupport: {
          title: 'Tabel Simbol Wakaf Al-Qur\'an',
          visualSupport: 'Tabel simbol tanda wakaf (م, ج, قلى, صلى, لا) beserta makna simbolik dan instruksi praktisnya.',
          starterPrompts: [
            'Tanda wakaf Lazim (م) mengharuskan kita untuk ...',
            'Kalimat fastabiqul khairat memerintahkan kita untuk ...'
          ]
        },
        extensionChallenge: {
          title: 'Kajian Qira\'at & Analisis Makna Wakaf',
          challengeTask: 'Menganalisis perbedaan makna yang timbul bila seorang qari berhenti di tanda wakaf yang salah pada Q.S. al-Mā’idah: 48.',
          realWorldContext: 'Menjadi imam shalat dan qari resmi pada agenda peringatan hari besar Islam di sekolah.'
        },
        default5E: {
          starterStimulus: 'Audio murottal syahdu Q.S. al-Mā’idah/5:48 oleh Syaikh Misyari Rasyid al-Afasy.',
          engage: 'Diagnostik: Siswa menemukan simbol tanda wakaf pada ayat yang ditampilkan di proyektor.',
          explore: 'Aktivitas berpasangan: Membaca bergantian dan mengoreksi bacaan waqaf temannya.',
          explain: 'Penjelasan kaidah waqaf lazim, jaiz, mamnu\', kafin, hasan, dan kaidah washal.',
          elaborate: 'Menyusun mind map tajwid dan menyetorkan hafalan bait pertama ayat 48.',
          evaluate: 'Exit ticket: Tuliskan arti tanda wakaf Jaiz (ج) dan satu contoh dari ayat yang dipelajari.'
        }
      },
      {
        id: 'y10-b1-st2',
        title: 'Analisis Kandungan Q.S. al-Maidah/5:48 & Nilai Kompetisi dalam Kebaikan',
        objectives: [
          {
            id: 'obj-y10-b1-2',
            text: 'Peserta didik mampu menganalisis kandungan Q.S. al-Maidah/5:48 dan mengaitkan pesan fastabiqul khairat dengan praktik kehidupan sehari-hari.'
          },
          {
            id: 'obj-y10-b1-3',
            text: 'Peserta didik dapat menganalisis manfaat dari penerapan perilaku kompetisi dalam kebaikan dalam kehidupan sehari-hari serta meyakini bahwa Islam memerintahkan perilaku kompetisi dalam kebaikan.'
          }
        ],
        defaultWalt: [
          'Menganalisis asbabun nuzul dan tafsir tematik Q.S. al-Mā’idah/5:48',
          'Mengaitkan konsep fastabiqul khairat dengan produktivitas akademik dan sosial generasi Z',
          'Merumuskan rencana aksi kompetisi dalam kebaikan di lingkungan sekolah Semesta'
        ],
        defaultWilf: [
          'Saya dapat menguraikan 3 pokok kandungan pesan dari Q.S. al-Mā’idah: 48.',
          'Saya dapat membedakan antara kompetisi positif (fastabiqul khairat) dan persaingan tidak sehat (hasad/iri).',
          'Saya dapat menyusun 2 target pribadi berbuat kebajikan terukur untuk pekan ini.'
        ],
        defaultSlo: [
          'Peserta didik mampu mengevaluasi hikmah kompetisi dalam kebaikan dan mengimplementasikannya dalam pembiasaan akhlak mulia di sekolah dan asrama.'
        ],
        clilTerms: [
          { term: 'Syariat & Minhaj', arabic: 'شِرْعَةً وَمِنْهَاجًا', definition: 'Aturan hukum syar\'i dan jalan terang yang digariskan Allah bagi tiap-tiap umat nabi.' },
          { term: 'Musabaqah', arabic: 'مُسَابَقَةٌ', definition: 'Perlombaan sehat dengan mengedepankan sportivitas, keikhlasan, dan kebermanfaatan umum.' }
        ],
        ealVocabulary: [
          { term: 'Healthy competition', arabic: 'تَنَافُسٌ شَرِيفٌ', indonesian: 'Kompetisi Sehat', hint: 'Constructive rivalry without malice' },
          { term: 'Divine Law', arabic: 'شَرِيعَةٌ', indonesian: 'Syariat / Hukum Allah', hint: 'Revealed guidelines for righteous living' }
        ],
        struggledScaffold: {
          title: 'Matriks Analisis Sebab-Akibat',
          strategies: [
            'Lembar kerja isian singkat perbandingan dampak kompetisi positif vs persaingan menjatuhkan.',
            'Pertanyaan pemandu: Mengapa Allah menciptakan keberagaman manusia menurut ayat 48?'
          ],
          scaffoldGuidance: 'Bimbing siswa menemukan kalimat kunci: "Sekiranya Allah menghendaki, niscaya kamu dijadikan-Nya satu umat saja".'
        },
        ealSupport: {
          title: 'Infografis Fastabiqul Khairat',
          visualSupport: 'Bagan pohon kebajikan (ibadah, akademik, sosial, lingkungan) dengan kata kunci dwibahasa.',
          starterPrompts: [
            'Tujuan Allah memerintahkan fastabiqul khairat adalah untuk ...',
            'Contoh kompetisi dalam kebaikan di kelas adalah ...'
          ]
        },
        extensionChallenge: {
          title: 'Proyek Sosial Aksi Nyata Fastabiqul Khairat',
          challengeTask: 'Merancang proposal kampanye amal mini (crowdfunding sedekah atau program bimbingan belajar teman sebaya) di lingkungan sekolah.',
          realWorldContext: 'Membangun karakter kepemimpinan transformasional muslim yang berdampak bagi masyarakat luas.'
        },
        default5E: {
          starterStimulus: 'Video inspiratif kisah anak muda muslim berprestasi internasional yang mengabdikan ilmunya bagi kemanusiaan.',
          engage: 'Jajak pendapat interaktif: Apakah kompetisi selalu berujung pada menang dan kalah?',
          explore: 'Diskusi kelompok studi kasus: Menelaah fenomena flexing prestasi vs niat tulus fastabiqul khairat.',
          explain: 'Kajian tafsir Ibnu Katsir dan Quraish Shihab mengenai keragaman umat dan ujian amal kebajikan.',
          elaborate: 'Menyusun "My Personal Fastabiqul Khairat Action Plan" untuk semester berjalan.',
          evaluate: 'Exit ticket: Mengapa fastabiqul khairat menuntut kita untuk tidak menunda-nunda kebaikan?'
        }
      }
    ]
  },
  {
    id: 'y10-bab2',
    chapterNumber: 'Bab 2',
    title: "Memahami Hakikat Syu'abul (Cabang) Iman: Mencintai Allah dan Ridha",
    yearGroup: 'Year 10',
    subtopics: [
      {
        id: 'y10-b2-st1',
        title: "Hakikat Syu'ab al-Iman dan Pembagian 77 Cabang Iman (Hati, Lisan, Anggota Badan)",
        objectives: [
          {
            id: 'obj-y10-b2-1',
            text: "Peserta didik mampu meyakini dan menjelaskan hakikat syu'ab al-iman (cabang-cabang iman) serta mengidentifikasi pembagian cabang iman (hati, lisan, dan anggota badan) berdasarkan hadis Rasulullah ﷺ."
          },
          {
            id: 'obj-y10-b2-6',
            text: "Peserta didik mampu mengaplikasikan perilaku yang mencerminkan cabang-cabang iman—khususnya mencintai Allah dan rida—dalam kehidupan sehari-hari, baik dalam lingkungan keluarga, sekolah, maupun masyarakat."
          }
        ],
        defaultWalt: [
          'Menjelaskan definisi iman secara bahasa dan istilah syar\'i',
          'Mengklasifikasikan cabang-cabang iman ke dalam dimensi ma\'rifatun bil qalbi, iqrarun bil lisan, dan \'amalun bil arkan',
          'Menghubungkan cabang iman terkecil (menyingkirkan duri di jalan) dengan kepedulian lingkungan'
        ],
        defaultWilf: [
          'Saya dapat menyebutkan hadis tentang 77 cabang iman (Al-Imanu bidh\'un wa sab\'una syu\'bah).',
          'Saya dapat mengelompokkan 6 contoh cabang iman ke dalam dimensi hati, lisan, atau fisik.',
          'Saya dapat mengidentifikasi 2 perilaku iman dalam rutinitas asrama atau sekolah.'
        ],
        defaultSlo: [
          'Peserta didik mampu menginternalisasi pohon iman (syu\'ab al-iman) sebagai landasan bertindak secara utuh dalam kehidupan bermasyarakat.'
        ],
        clilTerms: [
          { term: 'Syu\'abul Iman', arabic: 'شُعَبُ الْإِيمَانِ', definition: 'Cabang-cabang dan ranting keimanan yang mencakup amalan hati, perkataan, dan anggota badan.' },
          { term: 'Ma\'rifatun bil Qalbi', arabic: 'مَعْرِفَةٌ بِالْقَلْبِ', definition: 'Keyakinan yang mantap dan tertanam kokoh di dalam lubuk hati.' },
          { term: '\'Amalun bil Arkan', arabic: 'عَمَلٌ بِالْأَرْكَانِ', definition: 'Pembuktian keimanan melalui perbuatan nyata anggota tubuh.' }
        ],
        ealVocabulary: [
          { term: 'Branches of Faith', arabic: 'شُعَبُ الْإِيمَانِ', indonesian: 'Cabang Keimanan', hint: 'The multifaceted expressions of belief' },
          { term: 'Conviction', arabic: 'يَقِينٌ', indonesian: 'Keyakinan Mantap', hint: 'Unwavering trust in Allah' }
        ],
        struggledScaffold: {
          title: 'Diagram Pohon Syu\'abul Iman',
          strategies: [
            'Menggunakan visualisasi pohon (akar = keyakinan hati, batang/dahan = lisan, daun/buah = amal perbuatan).',
            'Game pencocokan kartu cabang iman ke kategori yang tepat.'
          ],
          scaffoldGuidance: 'Bantu siswa membedakan antara iman verbal (lisan) dengan buah keimanan sosial (amal).'
        },
        ealSupport: {
          title: 'Tabel Klasifikasi Dimensi Iman',
          visualSupport: 'Bagan 3 kolom (Hati / Qalb, Lisan, Fisik / Jawarikh) dilengkapi gambar ilustratif.',
          starterPrompts: [
            'Cabang iman yang paling utama adalah kalimat ...',
            'Cabang iman yang paling rendah adalah ...'
          ]
        },
        extensionChallenge: {
          title: 'Analisis Kitab Syu\'abul Iman Al-Baihaqi',
          challengeTask: 'Menelaah sistematika klasifikasi Imam Al-Baihaqi dalam kitab Syu\'ab al-Iman dan relevansinya bagi etika digital santri/pelajar.',
          realWorldContext: 'Membangun ekosistem sekolah berkarakter islami yang santun di dunia nyata dan maya.'
        },
        default5E: {
          starterStimulus: 'Pohon keimanan interaktif: Menempelkan dedaunan berisi amalan saleh harian.',
          engage: 'Pertanyaan pemantik: Apakah orang yang tidak menyingkirkan paku di jalan berkurang kualitas imannya?',
          explore: 'Eksplorasi Hadis riwayat Bukhari dan Muslim tentang cabang-cabang iman dan rasa malu.',
          explain: 'Penjabaran dimensi Iman (Tashdiq, Iqrar, \'Amal) dan dinamika iman (yazidu wa yanqushu).',
          elaborate: 'Studi kasus: Sikap seorang pelajar muslim ketika melihat fasilitas sekolah dirusak.',
          evaluate: 'Exit ticket: Mengapa rasa malu (al-haya\') disebut sebagai cabang penting dari iman?'
        }
      },
      {
        id: 'y10-b2-st2',
        title: "Konsep Mahabbatullah (Mencintai Allah) dan Sikap Ridha",
        objectives: [
          {
            id: 'obj-y10-b2-2',
            text: "Peserta didik mampu menjelaskan konsep mahabbatullah (mencintai Allah) sebagai salah satu cabang iman tertinggi; mengidentifikasi tanda-tanda dan bukti kecintaan seorang mukmin kepada Allah Swt."
          },
          {
            id: 'obj-y10-b2-3',
            text: "Peserta didik mampu menganalisis dalil (ayat/hadis) tentang mencintai Allah; merefleksikan keterkaitan antara mencintai Allah dengan ketaatan menjalankan perintah dan menjauhi larangan-Nya."
          },
          {
            id: 'obj-y10-b2-4',
            text: "Peserta didik mampu menjelaskan konsep rida (rida kepada Allah dan rida Allah kepada hamba-Nya) sebagai puncak dari keimanan; mengidentifikasi ciri-ciri sikap rida dalam menerima ketentuan (qada dan qadar) Allah."
          },
          {
            id: 'obj-y10-b2-5',
            text: "Peserta didik mampu merefleksikan keterkaitan antara mencintai Allah dan sikap rida dengan kualitas ibadah serta akhlak sehari-hari."
          }
        ],
        defaultWalt: [
          'Memahami hakikat Mahabbatullah sebagai pendorong ketaatan mutlak',
          'Mengidentifikasi tanda-tanda kecintaan hamba kepada Rabb-nya',
          'Menganalisis konsep ridha bi qada\'illahi ta\'ala dalam menghadapi ujian hidup'
        ],
        defaultWilf: [
          'Saya dapat menjelaskan makna firman Allah: "Wal-ladzina amanu asyaddu hubban lillah" (Q.S. al-Baqarah: 165).',
          'Saya dapat menyebutkan 3 tanda seorang mukmin mencintai Allah dalam rutinitas keseharian.',
          'Saya dapat membedakan antara sikap ridha dan sikap pasrah tanpa ikhtiar (fatalisme).'
        ],
        defaultSlo: [
          'Peserta didik mampu menumbuhkan rasa cinta sejati kepada Allah Swt. dan memiliki ketangguhan mental spiritual (resiliensi) melalui sikap ridha.'
        ],
        clilTerms: [
          { term: 'Mahabbatullah', arabic: 'مَحَبَّةُ اللهِ', definition: 'Cinta mendalam kepada Allah Swt. yang melahirkan kepatuhan total tanpa pamrih duniawi.' },
          { term: 'Ridha', arabic: 'الرِّضَا بِالْقَضَاءِ', definition: 'Ketenangan jiwa dan kelapangan dada menerima segala ketetapan qadha dan takdir Allah.' },
          { term: 'Ittiba\' ar-Rasul', arabic: 'اتِّبَاعُ الرَّسُولِ', definition: 'Meneladani dan mengikuti jejak sunnah Nabi Muhammad ﷺ sebagai bukti cinta kepada Allah.' }
        ],
        ealVocabulary: [
          { term: 'Love of God', arabic: 'مَحَبَّةُ اللهِ', indonesian: 'Mencintai Allah', hint: 'Supreme spiritual love and devotion' },
          { term: 'Contentment / Acceptance', arabic: 'رِضَا', indonesian: 'Rela / Menerima takdir', hint: 'Inner peace with divine decree' }
        ],
        struggledScaffold: {
          title: 'Lembar Refleksi Cinta & Ketaatan',
          strategies: [
            'Daftar periksa introspeksi: Berapa kali saya mengutamakan panggilan shalat dibanding bermain gadget?',
            'Analogi cinta manusiawi vs cinta ilahiah.'
          ],
          scaffoldGuidance: 'Jelaskan bahwa bukti cinta adalah perbuatan taat, bukan sekadar ucapan lisan.'
        },
        ealSupport: {
          title: 'Kata Kunci Hubb & Ridha',
          visualSupport: 'Diagram segitiga cinta: Hubbullah (Puncak), Hubbun Nabi, Hubbul Walidain.',
          starterPrompts: [
            'Bukti utama seorang hamba mencintai Allah adalah ...',
            'Sikap ridha dalam menghadapi kegagalan ujian adalah ...'
          ]
        },
        extensionChallenge: {
          title: 'Kajian Tasawuf Positif: Mahabbah Rabi\'ah al-Adawiyah',
          challengeTask: 'Menelaah konsep cinta murni Rabi\'ah al-Adawiyah dan mengontekstualisasikannya dengan ikhlas beramal di era serba transaksional.',
          realWorldContext: 'Membimbing kecerdasan emosional dan spiritual (ESQ) remaja muslim menghadapi fenomena quarter-life crisis.'
        },
        default5E: {
          starterStimulus: 'Kisah sahabat Nabi yang mengorbankan harta dan jiwanya karena kecintaan yang mendalam kepada Allah.',
          engage: 'Refleksi hening: Mengapa manusia sering kecewa saat terlalu bergantung pada pujian manusia?',
          explore: 'Bedah dalil Q.S. Ali \'Imran/3:31 (Qul in kuntum tuhibbunallah fattabi\'uni).',
          explain: 'Penjelasan tingkatan mahabbah dan hakikat ridha menghadapi takdir baik maupun buruk.',
          elaborate: 'Simulasi pemecahan masalah: Menghadapi kegagalan dalam seleksi olimpiade sains dengan sikap ridha dan optimisme.',
          evaluate: 'Exit ticket: Tuliskan satu langkah nyata untuk meningkatkan rasa cinta kepada Allah pekan ini.'
        }
      }
    ]
  },
  {
    id: 'y10-bab3',
    chapterNumber: 'Bab 3',
    title: "Menghindari Penyakit Hati: Israf, Riya, Sum'ah, Takabur dan Hasad",
    yearGroup: 'Year 10',
    subtopics: [
      {
        id: 'y10-b3-st1',
        title: "Penyakit Hati: Israf, Tabzir, Riya', dan Sum'ah",
        objectives: [
          {
            id: 'obj-y10-b3-1',
            text: "Peserta didik mampu menerapkan manfaat menghindari penyakit hati: membedakan israf, tabzir, riya', dan sum'ah berdasarkan dalil Al-Qur'an (CP Akhlak Fase E)."
          },
          {
            id: 'obj-y10-b3-2',
            text: "Peserta didik mampu menganalisis dampak penyakit hati dan menerapkan cara menghindarinya."
          }
        ],
        defaultWalt: [
          'Membedakan hakikat israf (berlebihan) dan tabzir (mubazir/sia-sia) beserta dalil syar\'inya',
          'Menganalisis bahaya riya\' dan sum\'ah yang menghapus pahala amal ibadah',
          'Merumuskan metode penyucian jiwa (tazkiyatun nafs) dari sifat pamer dan boros'
        ],
        defaultWilf: [
          'Saya dapat menjelaskan perbedaan israf dan tabzir melalui 2 contoh nyata.',
          'Saya dapat mengidentifikasi riya\' khafi (terselubung) dalam perilaku beribadah.',
          'Saya dapat menyebutkan dalil larangan mubazir dalam Q.S. al-Isra\' ayat 26-27.'
        ],
        defaultSlo: [
          'Peserta didik mampu membentengi diri dari perilaku konsumtif (israf) dan pamer kesalehan (riya\') dalam pergaulan fisik maupun media sosial.'
        ],
        clilTerms: [
          { term: 'Israf', arabic: 'إِسْرَافٌ', definition: 'Tindakan melampaui batas kewajaran dalam memanfaatkan harta, makanan, atau waktu.' },
          { term: 'Tabzir', arabic: 'تَبْذِيرٌ', definition: 'Menghambur-hamburkan harta untuk perkara yang tidak ada manfaatnya atau bermaksiat.' },
          { term: 'Riya\'', arabic: 'رِيَاءٌ', definition: 'Melakukan perbuatan ibadah dengan niat ingin dilihat dan dipuji oleh orang lain.' },
          { term: 'Sum\'ah', arabic: 'سُمْعَةٌ', definition: 'Menceritakan amal kebajikan yang telah diperbuat agar didengar dan disanjung orang lain.' }
        ],
        ealVocabulary: [
          { term: 'Extravagance', arabic: 'إِسْرَافٌ', indonesian: 'Boros / Berlebihan', hint: 'Wasting resources beyond need' },
          { term: 'Ostentation', arabic: 'رِيَاءٌ', indonesian: 'Pamer / Riya\'', hint: 'Showing off religious deeds' }
        ],
        struggledScaffold: {
          title: 'Matriks Perbandingan Perilaku Hati',
          strategies: [
            'Tabel komparasi 4 kolom: Istilah, Definisi, Contoh Nyata, Penawar Syar\'i.',
            'Analisis konten media sosial: Mengidentifikasi konten yang memicu pamer kesalehan.'
          ],
          scaffoldGuidance: 'Tekankan bahwa lawan dari riya\' adalah ikhlas semata-mata mengharap ridha Allah.'
        },
        ealSupport: {
          title: 'Kartu Istilah & Gejala Penyakit Hati',
          visualSupport: 'Infografis bahaya riya\' sebagai syirik ashghar (syirik kecil) yang tak kasat mata.',
          starterPrompts: [
            'Perbedaan israf dan tabzir terletak pada ...',
            'Bahaya riya\' terhadap pahala amal adalah ...'
          ]
        },
        extensionChallenge: {
          title: 'Analisis Gaya Hidup Minimalisme Islami (Zuhud Modern)',
          challengeTask: 'Membuat esai kritis tentang bahaya tren FOMO (Fear of Missing Out) dan budaya flexing di media sosial dari perspektif Q.S. al-A\'raf/7:31.',
          realWorldContext: 'Membimbing kecerdasan finansial dan spiritual generasi muda muslim.'
        },
        default5E: {
          starterStimulus: 'Tampilan infografis limbah makanan (food waste) di Indonesia dan video fenomena pamer kekayaan di medsos.',
          engage: 'Pertanyaan: Mengapa Al-Qur\'an menyebut pemboros sebagai saudara setan?',
          explore: 'Bedah dalil Q.S. al-Isrā’/17:26-27 dan hadis Nabi tentang syirik ashghar.',
          explain: 'Penjelasan perbedaan mendasar israf, tabzir, riya\', dan sum\'ah.',
          elaborate: 'Diskusi kelompok: Menilai batasan antara dakwah menginspirasi vs riya\' di media sosial.',
          evaluate: 'Exit ticket: Tuliskan doa penawar penyakit hati dan riya\' yang diajarkan Rasulullah ﷺ.'
        }
      },
      {
        id: 'y10-b3-st2',
        title: "Menghindari Takabur dan Hasad dengan Tawadhu' dan Syukur",
        objectives: [
          {
            id: 'obj-y10-b3-3',
            text: "Peserta didik mampu menerapkan manfaat menghindari takabur dan hasad; menjelaskan tawadhu' dan syukur sebagai penawar penyakit hati sesuai dalil syar'i."
          },
          {
            id: 'obj-y10-b3-4',
            text: "Peserta didik mampu merefleksikan manfaat menghindari penyakit hati (israf, tabzir, riya', takabur, hasad) dalam kehidupan bermasyarakat."
          }
        ],
        defaultWalt: [
          'Memahami definisi takabur (sombong) dan hasad (dengki) menurut sabda Nabi ﷺ',
          'Menganalisis bahaya hasad yang membakar kebaikan laksana api melahap kayu bakar',
          'Mempraktikkan sifat tawadhu\' (rendah hati) dan memperbanyak rasa syukur'
        ],
        defaultWilf: [
          'Saya dapat menjelaskan definisi sombong menurut hadis: "batharul haqqi wa ghamthun naas".',
          'Saya dapat menguraikan dampak buruk hasad bagi kesehatan mental dan keharmonisan sosial.',
          'Saya dapat menuliskan 3 bentuk pengamalan tawadhu\' di hadapan guru dan teman sebaya.'
        ],
        defaultSlo: [
          'Peserta didik mampu membersihkan hati dari sifat takabur dan hasad serta membiasakan sikap tawadhu\' dan syukur dalam pergaulan harian.'
        ],
        clilTerms: [
          { term: 'Takabur', arabic: 'تَكَبُّرٌ', definition: 'Sikap menolak kebenaran dan meremehkan orang lain.' },
          { term: 'Hasad', arabic: 'حَسَدٌ', definition: 'Merasa tidak senang atas nikmat yang diperoleh orang lain disertai harapan hilangnya nikmat tersebut.' },
          { term: 'Tawadhu\'', arabic: 'تَوَاضُعٌ', definition: 'Rendah hati, tidak merasa diri lebih mulia atau lebih hebat dari hamba Allah lainnya.' },
          { term: 'Ghibthah', arabic: 'غِبْطَةٌ', definition: 'Iri yang diperbolehkan, yaitu menginginkan kebaikan yang ada pada orang lain tanpa mengharapkan nikmatnya hilang.' }
        ],
        ealVocabulary: [
          { term: 'Arrogance', arabic: 'تَكَبُّرٌ / كِبْرٌ', indonesian: 'Sombong / Takabur', hint: 'Rejecting truth and belittling others' },
          { term: 'Envy / Jealousy', arabic: 'حَسَدٌ', indonesian: 'Dengki / Hasad', hint: 'Resentment of another\'s blessings' }
        ],
        struggledScaffold: {
          title: 'Lembar Periksa Penawar Hati',
          strategies: [
            'Menyediakan skenario pergaulan remaja (teman juara kelas, teman beli barang baru) dan alternatif respons.',
            'Latihan melafalkan doa syukur dan mendoakan keberkahan bagi orang lain (Baarakallahu laka).'
          ],
          scaffoldGuidance: 'Fokuskan pada rumus penawar: Takabur diobati dengan tawadhu\', Hasad diobati dengan syukur dan ghibthah.'
        },
        ealSupport: {
          title: 'Visual Penyakit vs Obat Hati',
          visualSupport: 'Bagan timbangan hati: Penyakit Hati (Takabur, Hasad) vs Penawar Syar\'i (Tawadhu\', Syukur).',
          starterPrompts: [
            'Ciri orang takabur menurut hadis adalah menolak ... dan meremehkan ...',
            'Ketika melihat teman mendapat prestasi, sikap terbaik adalah ...'
          ]
        },
        extensionChallenge: {
          title: 'Kajian Psikologi Positif Islam: Hasad dan Cyberbullying',
          challengeTask: 'Membuat infografis edukasi tentang korelasi antara kedengkian (hasad) di media sosial dengan maraknya hate comments dan perundungan siber.',
          realWorldContext: 'Menciptakan lingkungan digital sekolah yang aman, suportif, dan bebas perundungan.'
        },
        default5E: {
          starterStimulus: 'Kisah Iblis yang terusir dari surga karena takabur (merasa lebih baik dari Adam a.s.).',
          engage: 'Polling: Apakah kita pernah merasa sedih ketika melihat teman meraih nilai lebih tinggi?',
          explore: 'Analisis hadis: "Iyyakum wal hasada fa innal hasada ya\'kulul hasanat..." (Jauhilah hasad).',
          explain: 'Penjelasan akar penyakit sombong dan perbedaan hasad dengan ghibthah.',
          elaborate: 'Role-play interaksi: Menunjukkan sikap apresiatif atas keberhasilan teman satu angkatan.',
          evaluate: 'Exit ticket: Tuliskan satu sifat terpuji untuk meredam kesombongan diri.'
        }
      }
    ]
  },
  {
    id: 'y10-bab4',
    chapterNumber: 'Bab 4',
    title: 'Sumber Hukum Islam dan Al-Kulliyatu al-Khamsah (Dulu Bab 9)',
    yearGroup: 'Year 10',
    subtopics: [
      {
        id: 'y10-b4-st1',
        title: 'Kedudukan Sumber Hukum Islam (Al-Qur\'an, Hadis, Ijtihad) & Isu Kontemporer',
        objectives: [
          {
            id: 'obj-y10-b4-1',
            text: 'Peserta didik mampu merefleksikan Kedudukan Ketiga Sumber Hukum Islam secara Sistematis, dan Mempraktikkan Cara Menemukan Solusi Hukum Sederhana (Kontekstual).'
          },
          {
            id: 'obj-y10-b4-2',
            text: 'Peserta didik mampu Merefleksikan Urgensi Ijtihad dalam Isu Kontemporer (Era Digital), dan mampu Menerapkan Sikap Moderat (Toleran) terhadap Perbedaan Hasil Ijtihad.'
          }
        ],
        defaultWalt: [
          'Memahami hierarki dan kedudukan Al-Qur\'an, Hadis mutawatir/ahad, dan Ijtihad',
          'Mengidentifikasi metode ijtihad utama (Ijma\', Qiyas, Maslahah Mursalah, Istihsan)',
          'Menumbuhkan sikap tasamuh (toleransi) terhadap perbedaan khilafiyah fiqhiyyah'
        ],
        defaultWilf: [
          'Saya dapat mengurutkan 3 hierarki sumber hukum Islam beserta dalil Q.S. an-Nisa ayat 59.',
          'Saya dapat menjelaskan rukun qiyas melalui contoh analogi pengharaman narkotika dengan khamr.',
          'Saya dapat menyikapi perbedaan pendapat ulama fikih dengan adab yang santun.'
        ],
        defaultSlo: [
          'Peserta didik mampu bernalar kritis dalam memposisikan sumber hukum Islam dan menghargai fatwa hukum ulama kontemporer.'
        ],
        clilTerms: [
          { term: 'Ijtihad', arabic: 'اِجْتِهَادٌ', definition: 'Pengerahan segenap kemampuan intelektual fukaha untuk menggali hukum syara\' yang bersifat zanni.' },
          { term: 'Qiyas', arabic: 'قِيَاسٌ', definition: 'Menyamakan hukum suatu peristiwa yang tidak ada nashnya dengan peristiwa yang ada nashnya karena persamaan \'illat.' },
          { term: 'Maslahah Mursalah', arabic: 'مَصْلَحَةٌ مُرْسَلَةٌ', definition: 'Kemashlahatan umum yang tidak didukung atau dibatalkan oleh dalil khusus namun sejalan dengan jiwa syariat.' }
        ],
        ealVocabulary: [
          { term: 'Islamic Jurisprudence', arabic: 'فِقْهٌ إِسْلَامِيٌّ', indonesian: 'Fikih Islam', hint: 'Understanding of divine statutory rulings' },
          { term: 'Analogy', arabic: 'قِيَاسٌ', indonesian: 'Analogi Hukum (Qiyas)', hint: 'Legal analogical reasoning' }
        ],
        struggledScaffold: {
          title: 'Bagan Hierarki Sumber Hukum',
          strategies: [
            'Bagan segitiga piramida sumber hukum: Puncak Al-Qur\'an, kedua Sunnah, ketiga Ijtihad.',
            'Latihan identifikasi 4 rukun qiyas: Asal, Fara\', Hukum Asal, dan \'Illat.'
          ],
          scaffoldGuidance: 'Jelaskan bahwa ijtihad hanya berlaku pada persoalan yang tidak memiliki nash qath\'i yang sharih.'
        },
        ealSupport: {
          title: 'Glosarium Ushul Fiqih Sederhana',
          visualSupport: 'Bagan alur penetapan fatwa hukum kontemporer (MUI / Majelis Tarjih / Bahtsul Masail).',
          starterPrompts: [
            'Sumber hukum Islam yang pertama dan utama adalah ...',
            'Ijtihad diperlukan ketika suatu masalah baru ...'
          ]
        },
        extensionChallenge: {
          title: 'Ijtihad Kontemporer: Hukum Transaksi Aset Kripto & AI',
          challengeTask: 'Membuat studi banding fatwa ormas Islam Indonesia (MUI, NU, Muhammadiyah) tentang status cryptocurrency dan hak kekayaan intelektual AI.',
          realWorldContext: 'Mempersiapkan wawasan literasi hukum Islam menghadapi disrupsi ekonomi dan teknologi digital masa depan.'
        },
        default5E: {
          starterStimulus: 'Dialog Mu\'adz bin Jabal saat diutus ke Yaman mengenai pedoman pengambilan keputusan hukum.',
          engage: 'Studi kasus singkat: Mengapa Al-Qur\'an tidak menyebutkan kata "rokok" atau "narkoba", tetapi para ulama menetapkan hukumnya?',
          explore: 'Simulasi kelompok membedah rukun qiyas dalam kasus penetapan hukum ganja/narkoba.',
          explain: 'Penjelasan kedudukan hierarkis sumber hukum dan kaidah fikih perubahan hukum seiring perubahan zaman dan tempat.',
          elaborate: 'Analisis studi kasus: Hukum shalat di luar angkasa bagi astronaut muslim.',
          evaluate: 'Exit ticket: Mengapa hasil ijtihad ulama bisa berbeda dan bagaimana adab seorang muslim menyikapinya?'
        }
      },
      {
        id: 'y10-b4-st2',
        title: 'Prinsip Al-Kulliyatu al-Khamsah (Lima Prinsip Perlindungan Hidup)',
        objectives: [
          {
            id: 'obj-y10-b4-3',
            text: 'Peserta didik mampu menerapkan dan merefleksikan prinsip hifzhu al-din (menjaga agama) dan hifzhu al-nafs (menjaga jiwa) sebagai bagian dari kerangka al-kulliyāt al-khamsah dalam kehidupan sehari-hari.'
          },
          {
            id: 'obj-y10-b4-4',
            text: 'Peserta didik mampu menerapkan dan merefleksikan prinsip hifzhu al-\'aql (menjaga akal) dan hifzhu al-nasl (menjaga keturunan) untuk membentengi diri dari bahaya narkoba, hoaks, serta pergaulan bebas.'
          },
          {
            id: 'obj-y10-b4-5',
            text: 'Peserta didik mampu menerapkan dan merefleksikan konsep hifzhu al-mal (menjaga harta).'
          },
          {
            id: 'obj-y10-b4-6',
            text: 'Peserta didik mampu menerapkan dan merefleksikan keterkaitan antara al-kulliyatu al-khamsah melalui pemecahan studi kasus kontemporer.'
          }
        ],
        defaultWalt: [
          'Memahami 5 tujuan universal syariat Islam (Maqashid Syari\'ah / Al-Kulliyatu al-Khamsah)',
          'Menganalisis prinsip perlindungan: Agama, Jiwa, Akal, Keturunan, dan Harta',
          'Menerapkan Al-Kulliyatu al-Khamsah dalam memecahkan problematika kemanusiaan modern'
        ],
        defaultWilf: [
          'Saya dapat menyebutkan kelima prinsip Al-Kulliyatu al-Khamsah dalam bahasa Arab dan artinya.',
          'Saya dapat menghubungkan larangan miras/narkoba dengan prinsip hifzh al-\'aql.',
          'Saya dapat menganalisis kasus perundungan (bullying) sebagai pelanggaran hifzh an-nafs.'
        ],
        defaultSlo: [
          'Peserta didik mampu menjadikan lima prinsip pokok perlindungan syariat sebagai kompas moral dalam membentengi diri dari bahaya hoaks, narkoba, judi online, dan seks bebas.'
        ],
        clilTerms: [
          { term: 'Hifzh ad-Din', arabic: 'حِفْظُ الدِّينِ', definition: 'Menjaga dan memelihara keberlangsungan nilai-nilai agama dan kebebasan beribadah.' },
          { term: 'Hifzh an-Nafs', arabic: 'حِفْظُ النَّفْسِ', definition: 'Menjaga keselamatan fisik, hak hidup, dan martabat setiap nyawa manusia.' },
          { term: 'Hifzh al-\'Aql', arabic: 'حِفْظُ الْعَقْلِ', definition: 'Menjaga kejernihan daya nalar dan akal pikiran dari zat perusak atau informasi beracun.' },
          { term: 'Hifzh an-Nasl', arabic: 'حِفْظُ النَّسْلِ', definition: 'Memelihara kesucian garis keturunan dan kehormatan keluarga dari perzinaan.' },
          { term: 'Hifzh al-Mal', arabic: 'حِفْظُ الْمَالِ', definition: 'Melindungi kepemilikan harta halal dari pencurian, penipuan, riba, dan perjudian.' }
        ],
        ealVocabulary: [
          { term: 'Five Universal Principles', arabic: 'الْكُلِّيَّاتُ الْخَمْسَةُ', indonesian: 'Lima Prinsip Universal', hint: 'The 5 essential maqasid objectives' },
          { term: 'Protection of Life', arabic: 'حِفْظُ النَّفْسِ', indonesian: 'Menjaga Jiwa', hint: 'Preserving human life and health' }
        ],
        struggledScaffold: {
          title: 'Tabel Pemetaan Studi Kasus Maqashid',
          strategies: [
            'Matriks menghubungkan kasus sehari-hari (helm saat berkendara, belajar giat, menabung halal) ke prinsip Kulliyatu Khamsah.',
            'Kartu skenario kuis cepat interaktif.'
          ],
          scaffoldGuidance: 'Bimbing siswa menyadari bahwa seluruh aturan syariat bertujuan mendatangkan maslahat dan menolak mafsadat.'
        },
        ealSupport: {
          title: 'Diagram Bintang 5 Perlindungan',
          visualSupport: 'Bagan 5 pilar dengan lambang ikonik (Masjid, Hati/Nyawa, Otak, Keluarga, Koin/Harta).',
          starterPrompts: [
            'Larangan menyebarkan hoaks berkaitan erat dengan prinsip menjaga ...',
            'Sanksi hukum pencurian dalam Islam bertujuan menjaga ...'
          ]
        },
        extensionChallenge: {
          title: 'Maqashid Syari\'ah dalam SDGs PBB',
          challengeTask: 'Membuat analisis komparatif antara Al-Kulliyatu al-Khamsah dengan Sustainable Development Goals (SDGs) PBB terkait pengentasan kemiskinan dan kelestarian hidup.',
          realWorldContext: 'Mempromosikan kontribusi nilai Islam dalam agenda pembangunan berkelanjutan dunia.'
        },
        default5E: {
          starterStimulus: 'Video deklarasi HAM PBB dan penayangan fakta kekejaman genosida vs prinsip hifzhun nafs dalam Islam.',
          engage: 'Tanya jawab: Jika seseorang sakit keras dan terpaksa memakan obat tertentu, prinsip apa yang didahulukan?',
          explore: 'Analisis berkelompok: Menelaah fenomena maraknya pinjaman online ilegal dan judi online dari sudut pandang hifzh al-mal.',
          explain: 'Penjelasan mendalam konsepsi Imam Asy-Syathibi tentang tingkatan daruriyyat, hajiyyat, dan tahsiniyyat.',
          elaborate: 'Merumuskan deklarasi komitmen bersama siswa: "Benteng Generasi Emas Anti Narkoba, Judol & Hoaks".',
          evaluate: 'Exit ticket: Tuliskan satu contoh tindakan preventif untuk hifzh al-\'aql di era maraknya berita palsu.'
        }
      }
    ]
  },
  {
    id: 'y10-bab5',
    chapterNumber: 'Bab 5',
    title: 'Metode Dakwah Wali Songo di Tanah Jawa',
    yearGroup: 'Year 10',
    subtopics: [
      {
        id: 'y10-b5-st1',
        title: 'Sejarah Pra-Wali Songo, Tokoh Wali Songo, dan Pendekatan Budaya',
        objectives: [
          {
            id: 'obj-y10-b5-1',
            text: 'Peserta didik mampu merefleksikan peran penyebar Islam pra-Wali Songo dan konteks sosial Nusantara abad 7-15 M; menjelaskan kondisi keagamaan yang melatarbelakangi munculnya Wali Songo (CP SPI Fase E).'
          },
          {
            id: 'obj-y10-b5-2',
            text: 'Peserta didik mampu mengidentifikasi dan merefleksikan metode dakwah Wali Songo (ceramah, kesenian, pesantren, silaturrahim) dalam konteks akulturasi budaya Nusantara (1).'
          },
          {
            id: 'obj-y10-b5-3',
            text: 'Peserta didik mampu mengidentifikasi dan merefleksikan metode dakwah Wali Songo (ceramah, kesenian, pesantren, silaturrahim) dalam konteks akulturasi budaya Nusantara (2).'
          }
        ],
        defaultWalt: [
          'Memetakan jalur penyebaran Islam pra-Wali Songo dan masa keemasan Majapahit',
          'Mengidentifikasi sembilan tokoh Wali Songo beserta pusat dakwah masing-masing di Pulau Jawa',
          'Menganalisis strategi akulturasi budaya (wayang kulit, gending Ilir-Ilir, arsitektur masjid Kudus)'
        ],
        defaultWilf: [
          'Saya dapat menyebutkan nama-nama 9 Wali Songo dan wilayah basis dakwahnya.',
          'Saya dapat menjelaskan bagaimana Sunan Kalijaga memanfaatkan wayang sebagai media dakwah tauhid.',
          'Saya dapat menganalisis bentuk toleransi Sunan Kudus yang melarang penyembelihan sapi untuk menghormati masyarakat Hindu.'
        ],
        defaultSlo: [
          'Peserta didik mampu menguraikan strategi kultural Wali Songo dan mengambil ibrah keteladanan dalam menyebarkan nilai kebaikan secara harmonis.'
        ],
        clilTerms: [
          { term: 'Akulturasi', arabic: 'تَمَازُجٌ ثَقَافِيٌّ', definition: 'Proses perpaduan dua kebudayaan atau lebih tanpa menghilangkan kepribadian asli masing-masing.' },
          { term: 'Bil-Hikmah', arabic: 'بِالْحِكْمَةِ', definition: 'Pendekatan dakwah yang penuh kebijaksanaan, kearifan lokal, dan pemahaman mendalam atas kondisi objek dakwah.' },
          { term: 'Pesantren Tradisional', arabic: 'مَعْهَدٌ تَقْلِيدِيٌّ', definition: 'Institusi pendidikan keislaman berasrama yang diinisiasi oleh Maulana Malik Ibrahim dan Sunan Ampel.' }
        ],
        ealVocabulary: [
          { term: 'Nine Saints', arabic: 'أَوْلِيَاءُ التِّسْعَةِ', indonesian: 'Wali Songo', hint: 'Pioneering Islamic propagators in Java' },
          { term: 'Cultural Acculturation', arabic: 'تَمَازُجٌ حَضَارِيٌّ', indonesian: 'Akulturasi Budaya', hint: 'Harmonious blending of traditions' }
        ],
        struggledScaffold: {
          title: 'Peta Konsep & Profil Wali Songo',
          strategies: [
            'Peta rute penyebaran di sepanjang pesisir utara Jawa (Gresik, Tuban, Demak, Kudus, Muria, Cirebon).',
            'Pencocokan kartu nama wali dengan karya kesenian/media dakwahnya.'
          ],
          scaffoldGuidance: 'Fokuskan pada Sunan Gresik, Sunan Ampel, Sunan Giri, Sunan Bonang, Sunan Drajat, Sunan Kalijaga, Sunan Kudus, Sunan Muria, Sunan Gunung Jati.'
        },
        ealSupport: {
          title: 'Tabel Profil Media Dakwah Kultural',
          visualSupport: 'Gambar Menara Kudus bergaya candi dan gamelan Sekaten dengan keterangan makna filosofis.',
          starterPrompts: [
            'Metode dakwah Sunan Kalijaga yang terkenal adalah menggunakan ...',
            'Sunan Ampel mengajarkan falsafah Moh Limo yang berarti ...'
          ]
        },
        extensionChallenge: {
          title: 'Kajian Hermeneutika Gending Kultural Jawa',
          challengeTask: 'Membedah lirik tembang "Lir-Ilir" karya Sunan Kalijaga atau "Tombo Ati" karya Sunan Bonang dari perspektif tasawuf dan syariat Islam.',
          realWorldContext: 'Pelestarian seni budaya bernafaskan Islam sebagai warisan peradaban nasional.'
        },
        default5E: {
          starterStimulus: 'Audio tembang Lir-Ilir atau video pertunjukan wayang kulit dengan lakon Jimat Kalimasada.',
          engage: 'Diskusi: Mengapa Islam di Nusantara berkembang pesat tanpa melalui penaklukan militer besar?',
          explore: 'Eksplorasi peta interaktif pesisir Jawa dan peninggalan artefak dakwah Wali Songo.',
          explain: 'Penjelasan prinsip dakwah bil-hikmah, wal mau\'idzatil hasanah, wa jadilhum billati hiya ahsan.',
          elaborate: 'Studi kelompok: Mengapa Sunan Kudus membangun menara masjid menyerupai candi Hindu?',
          evaluate: 'Exit ticket: Tuliskan 2 nilai kearifan lokal yang diadaptasi Wali Songo dalam dakwahnya.'
        }
      },
      {
        id: 'y10-b5-st2',
        title: 'Keteladanan Wali Songo & Relevansi Nilai Dakwah Damai Kontemporer',
        objectives: [
          {
            id: 'obj-y10-b5-4',
            text: 'Peserta didik mampu menganalisis keteladanan Wali Songo dan merefleksikan nilai-nilai dakwah damai (bil-hikmah wal-mau\'idzatil hasanah) yang relevan bagi dakwah kontemporer.'
          },
          {
            id: 'obj-y10-b5-5',
            text: 'Peserta didik mampu merefleksikan dan menerapkan nilai-nilai keteladanan Wali Songo dalam kehidupan bermasyarakat: toleransi, kesantunan, dan dakwah tanpa kekerasan.'
          },
          {
            id: 'obj-y10-b5-6',
            text: 'Peserta didik mampu merefleksikan keteladanan Wali Songo dan mereview materi Bab 1-5 secara terpadu; siap menghadapi CA Semester-End 1.'
          }
        ],
        defaultWalt: [
          'Merefleksikan keteladanan akhlak pribadi Wali Songo (keikhlasan, kesederhanaan, etos keilmuan)',
          'Menganalisis prinsip dakwah tanpa kekerasan dalam merajut kerukunan antarsuku dan agama',
          'Mempersiapkan sintesis pemahaman Bab 1 hingga Bab 5 menyongsong Common Assessment (CA) Semester 1'
        ],
        defaultWilf: [
          'Saya dapat menyimpulkan 3 keteladanan kepemimpinan para Wali Songo.',
          'Saya dapat mengkritisi model dakwah provokatif dan membandingkannya dengan kesantunan Wali Songo.',
          'Saya dapat menyelesaikan uji kompetensi terpadu Bab 1-5 dengan skor memuaskan.'
        ],
        defaultSlo: [
          'Peserta didik mampu meneladani kesantunan para wali dalam interaksi harian dan siap menguasai materi Semester 1 secara komprehensif.'
        ],
        clilTerms: [
          { term: 'Mau\'idzatil Hasanah', arabic: 'الْمَوْعِظَةُ الْحَسَنَةُ', definition: 'Pengajaran dan nasihat yang disampaikan dengan penuh kelembutan dan menyentuh nurani.' },
          { term: 'Toleransi Beragama', arabic: 'تَسَامُحٌ دِينِيٌّ', definition: 'Sikap saling menghormati dan menghargai keberadaan pemeluk keyakinan lain.' }
        ],
        ealVocabulary: [
          { term: 'Peaceful Propagation', arabic: 'دَعْوَةٌ سِلْمِيَّةٌ', indonesian: 'Dakwah Damai', hint: 'Spreading faith through kindness and peace' },
          { term: 'Spiritual Exemplar', arabic: 'قُدْوَةٌ حَسَنَةٌ', indonesian: 'Teladan Mulia', hint: 'Role model of high virtue' }
        ],
        struggledScaffold: {
          title: 'Rangkuman Intisari Semester 1',
          strategies: [
            'Lembar rekapitulasi poin kunci Bab 1 (Kompetisi Kebaikan), Bab 2 (Cabang Iman), Bab 3 (Penyakit Hati), Bab 4 (Sumber Hukum), Bab 5 (Wali Songo).',
            'Sesi tanya-jawab kilat terpandu.'
          ],
          scaffoldGuidance: 'Berikan review terstruktur kisi-kisi asesmen akhir semester 1.'
        },
        ealSupport: {
          title: 'Mind-Map Terpadu Semester 1',
          visualSupport: 'Bagan pohon capaian pembelajaran Fase E Semester 1.',
          starterPrompts: [
            'Ciri utama dakwah Wali Songo yang patut kita teladani adalah ...',
            'Pelajaran terbesar dari sejarah masuknya Islam di Jawa adalah ...'
          ]
        },
        extensionChallenge: {
          title: 'Simulasi Strategi Dakwah Digital Gen-Z',
          challengeTask: 'Merancang konsep podcast atau short-video dakwah kreatif dengan mengadopsi prinsip adaptasi kultural Sunan Kalijaga.',
          realWorldContext: 'Memanfaatkan media baru untuk menyebarkan pesan perdamaian Islam rahmatan lil \'alamin.'
        },
        default5E: {
          starterStimulus: 'Kutipan pesan Sunan Drajat: "Wenehono teken marang wong kang wuto, wenehono mangan marang wong kang luwe...".',
          engage: 'Refleksi: Mengapa dakwah yang santun lebih awet berakar di hati masyarakat dibanding dakwah konfrontatif?',
          explore: 'Review kilat Bab 1 sampai 5 melalui kuis interaktif Kahoot/Quizizz bertema PAI.',
          explain: 'Penguatan konsep kunci materi semester 1 dan pembahasan soal-soal penalaran tinggi (HOTS).',
          elaborate: 'Konsolidasi catatan belajar dan konsultasi kesulitan materi.',
          evaluate: 'Exit ticket: Tuliskan satu target perbaikan diri pasca mempelajari materi PAI Semester 1.'
        }
      }
    ]
  },
  {
    id: 'y10-bab6',
    chapterNumber: 'Bab 6',
    title: 'Menjauhi Pergaulan Bebas dan Perbuatan Zina untuk Melindungi Harkat dan Martabat Manusia',
    yearGroup: 'Year 10',
    subtopics: [
      {
        id: 'y10-b6-st1',
        title: 'Membaca, Menghafal, dan Analisis Q.S. al-Isra\'/17:32 dan Q.S. an-Nur/24:2',
        objectives: [
          {
            id: 'obj-y10-b6-1',
            text: 'Peserta didik mampu membaca, menghafal, dan menulis, dan menjelaskan Q.S. al-Isra\'/17:32 dan Q.S. an-Nur/24:2 dengan tartil; menganalisis kandungannya tentang larangan pergaulan bebas dan zina beserta tajwid wakaf dan wasal.'
          },
          {
            id: 'obj-y10-b6-2',
            text: 'Peserta didik mampu menganalisis bahaya pergaulan bebas dari perspektif empiris dan syar\'i; menerapkan nilai-nilai ayat dalam menjaga kehidupan sosial yang bermartabat.'
          }
        ],
        defaultWalt: [
          'Membaca dan menghafal Q.S. al-Isrā’/17:32 dan Q.S. an-Nūr/24:2 secara tartil',
          'Menganalisis larangan mendekati zina (la taqrabuz-zina) sebagai preventif total',
          'Mengidentifikasi bahaya pergaulan bebas dari kacamata medis, psikologis, dan sosiologis'
        ],
        defaultWilf: [
          'Saya dapat melafalkan Q.S. al-Isrā’: 32 dengan tajwid yang fasih dan makna perkata.',
          'Saya dapat menjelaskan mengapa ayat berbunyi "Jangan dekati zina" bukan hanya "Jangan berzina".',
          'Saya dapat menguraikan dampak buruk zina terhadap penularan IMS (Infeksi Menular Seksual) dan ketahanan keluarga.'
        ],
        defaultSlo: [
          'Peserta didik mampu menjaga kehormatan diri dengan membatasi pergaulan bebas dan menguatkan benteng moralitas.'
        ],
        clilTerms: [
          { term: 'La Taqrabu az-Zina', arabic: 'لَا تَقْرَبُوا الزِّنَا', definition: 'Larangan tegas untuk tidak mendekati segala bentuk perantara, pintu, atau sarana yang menjerumuskan pada perzinaan.' },
          { term: 'Fahisyah', arabic: 'فَاحِشَةٌ', definition: 'Perbuatan yang sangat keji, kotor, dan menjijikkan serta ditolak oleh akal sehat dan fitrah manusia.' },
          { term: 'Ghadhul Bashar', arabic: 'غَضُّ الْبَصَرِ', definition: 'Menundukkan pandangan mata dari melihat hal-hal yang diharamkan syariat.' }
        ],
        ealVocabulary: [
          { term: 'Adultery / Fornication', arabic: 'زِنَا', indonesian: 'Zina', hint: 'Illicit sexual relations' },
          { term: 'Modesty', arabic: 'عِفَّةٌ / حَيَاءٌ', indonesian: '\'Iffah / Menjaga Kehormatan', hint: 'Chastity and moral restraint' }
        ],
        struggledScaffold: {
          title: 'Tahapan Pintu-Pintu Menuju Zina',
          strategies: [
            'Bagan tangga jebakan pergaulan bebas (tatapan liar, chat tak senonoh, berkhalwat, sentuhan fisik, perzinaan).',
            'Bimbingan hafalan lafal pendek Q.S. al-Isra\': 32.'
          ],
          scaffoldGuidance: 'Tekankan konsep sadduz-dzari\'ah (menutup jalan menuju dosa).'
        },
        ealSupport: {
          title: 'Kata Kunci Perlindungan Diri',
          visualSupport: 'Poster kampanye "Guard Your Gaze & Guard Your Honor" bilingual.',
          starterPrompts: [
            'Dua dampak buruk zina menurut Q.S. al-Isra ayat 32 adalah fahisyah dan ...',
            'Langkah utama mencegah pergaulan bebas di era digital adalah ...'
          ]
        },
        extensionChallenge: {
          title: 'Studi Dampak Pornografi Terhadap Kerusakan Otak (PFC)',
          challengeTask: 'Membuat telaah ilmiah neurosains mengenai pengaruh kecanduan pornografi terhadap Prefrontal Cortex (PFC) dan korelasi nilai syariat ghadhul bashar.',
          realWorldContext: 'Membangun generasi muda yang terbebas dari jerat kecanduan pornografi dan pergaulan menyimpang.'
        },
        default5E: {
          starterStimulus: 'Data infografis Kemenkes mengenai peningkatan kasus kehamilan di luar nikah dan penyakit seksual menular pada remaja.',
          engage: 'Pertanyaan: Mengapa Islam sangat tegas melarang khalwat (berdua-duaan antara non-mahram)?',
          explore: 'Analisis teks Q.S. al-Isrā’/17:32 dan Q.S. an-Nūr/24:2 serta hadis tentang panah beracun Iblis.',
          explain: 'Penjelasan kategori zina (muhsan dan ghairu muhsan) serta urgensi menjaga kesucian nasab.',
          elaborate: 'Menyusun batasan adab pertemanan lawan jenis yang sehat di sekolah dan asrama.',
          evaluate: 'Exit ticket: Tuliskan 2 cara efektif membentengi diri dari pornografi di smartphone.'
        }
      },
      {
        id: 'y10-b6-st2',
        title: 'Solusi Qur\'ani, Studi Kasus Pergaulan Bebas & Evaluasi Terpadu Bab 6',
        objectives: [
          {
            id: 'obj-y10-b6-3',
            text: 'Peserta didik mampu menerapkan nilai Q.S. al-Isra\'/17:32 dan Q.S. an-Nur/24:2 dalam kehidupan nyata; merefleksikan cara bergaul yang sesuai ajaran Islam.'
          },
          {
            id: 'obj-y10-b6-4',
            text: 'Peserta didik mampu menganalisis studi kasus pergaulan bebas dan merumuskan solusi berbasis nilai Al-Qur\'an dan hadis terkait; menerapkan hukum bacaan wakaf dan wasal.'
          },
          {
            id: 'obj-y10-b6-5',
            text: 'Peserta didik mampu mereview materi Bab 6 secara terpadu; siap menghadapi Common Assessment Bab 6.'
          }
        ],
        defaultWalt: [
          'Merumuskan solusi preventif dan kuratif terhadap problematika pergaulan bebas remaja',
          'Menganalisis studi kasus nyata pergaulan remaja urban dengan pisau bedah nilai Qur\'ani',
          'Mempersiapkan diri menghadapi asesmen formatif Bab 6'
        ],
        defaultWilf: [
          'Saya dapat menyusun 3 kiat jitu menjaga pertemanan lawan jenis yang produktif dan bermartabat.',
          'Saya dapat memberikan solusi bijak atas dilema teman sebaya yang terjerumus pergaulan negatif.',
          'Saya dapat menuntaskan latihan soal Bab 6 dengan penalaran analitis yang kokoh.'
        ],
        defaultSlo: [
          'Peserta didik mampu mengokohkan prinsip kehormatan diri dan menjadi pelopor pergaulan islami yang sehat di lingkungan sekolah.'
        ],
        clilTerms: [
          { term: 'Saddu adz-Dzari\'ah', arabic: 'سَدُّ الذَّرِيعَةِ', definition: 'Menutup jalan atau sarana yang berpotensi membawa kepada perbuatan haram.' },
          { term: '\'Iffah', arabic: 'عِفَّةٌ', definition: 'Kemampuan menahan diri dan mengendalikan hawa nafsu demi memelihara martabat kesucian diri.' }
        ],
        ealVocabulary: [
          { term: 'Chastity', arabic: 'عِفَّةٌ', indonesian: 'Kesucian Diri', hint: 'State of being pure from immoral acts' },
          { term: 'Boundaries', arabic: 'حُدُودٌ شَرْعِيَّةٌ', indonesian: 'Batasan Syar\'i', hint: 'Divine limits in social conduct' }
        ],
        struggledScaffold: {
          title: 'Lembar Studi Kasus Teman Sebaya',
          strategies: [
            'Skenario dilema: Teman satu kelompok mengajak pergi nongkrong hingga larut malam tanpa izin orang tua.',
            'Format respons berstruktur: Identifikasi Risiko -> Solusi Qur\'ani -> Kalimat Penolakan Asertif.'
          ],
          scaffoldGuidance: 'Latih siswa berani berkata "tidak" pada ajakan maksiat tanpa memutus tali silaturrahim.'
        },
        ealSupport: {
          title: 'Grafik Benteng Moral Remaja',
          visualSupport: 'Diagram 4 dinding benteng: Shalat Khusyuk, Shaum Sunnah, Puasa Mata (Ghadhul Bashar), dan Lingkungan Sahabat Saleh.',
          starterPrompts: [
            'Nasihat Rasulullah bagi pemuda yang belum mampu menikah adalah ...',
            'Cara menolak ajakan yang melanggar syariat adalah ...'
          ]
        },
        extensionChallenge: {
          title: 'Kampanye Media: Safe Socializing in Islam',
          challengeTask: 'Membuat konten edukasi infografis atau video reel bertema "Healthy Friendship, Pure Heart" untuk dipublikasikan di mading atau kanal OSIS.',
          realWorldContext: 'Mempengaruhi tren pergaulan pemuda menjadi lebih religius dan beradab.'
        },
        default5E: {
          starterStimulus: 'Kisah keteladanan Nabi Yusuf a.s. saat menolak godaan rayuan istri pembesar Mesir (Q.S. Yusuf/12:23).',
          engage: 'Refleksi: Apa yang membuat Nabi Yusuf mampu berkata "Ma\'adzallah" (Aku berlindung kepada Allah)?',
          explore: 'Bedah studi kasus: Analisis bahaya pacaran di usia sekolah terhadap fokus belajar dan psikologis.',
          explain: 'Penjelasan sabda Nabi: "Wahai para pemuda, barangsiapa yang telah mampu ba\'ah maka menikahlah, dan yang belum mampu hendaklah berpuasa...".',
          elaborate: 'Simulasi role-play komunikasi asertif menolak godaan berduaan dengan lawan jenis.',
          evaluate: 'Exit ticket: Tuliskan satu prinsip emas yang akan selalu kamu pegang dalam pergaulan remaja.'
        }
      }
    ]
  },
  {
    id: 'y10-bab7',
    chapterNumber: 'Bab 7',
    title: "Khauf, Raja', Tawakkal dan Taubat Kepada-Nya",
    yearGroup: 'Year 10',
    subtopics: [
      {
        id: 'y10-b7-st1',
        title: "Hakikat Khauf dan Raja' sebagai Fondasi Keseimbangan Iman",
        objectives: [
          {
            id: 'obj-y10-b7-1',
            text: "Peserta didik mampu meyakini dan merefleksikan hakikat khauf dan raja' sebagai fondasi iman yang seimbang."
          },
          {
            id: 'obj-y10-b7-2',
            text: "Peserta didik mampu menganalisis konsep tawakal dan taubat, serta menerapkan sikap tawakal dan taubat yang benar berdasarkan dalil Al-Qur'an dan hadis."
          }
        ],
        defaultWalt: [
          'Memahami definisi khauf (takut kepada Allah) dan raja\' (berharap rahmat Allah)',
          'Mengibaratkan khauf dan raja\' laksana dua sayap burung yang seimbang',
          'Menguraikan bahaya putus asa dari rahmat Allah dan rasa aman dari makar Allah'
        ],
        defaultWilf: [
          'Saya dapat menjelaskan perumpamaan hati mukmin dengan dua sayap burung (khauf dan raja\').',
          'Saya dapat menyebutkan dalil firman Allah tentang sifat para nabi yang berdoa dengan khauf dan thama\' (Q.S. al-Anbiya: 90).',
          'Saya dapat mengidentifikasi dampak jika khauf mendominasi tanpa raja\' (putus asa) atau sebaliknya (meremehkan dosa).'
        ],
        defaultSlo: [
          'Peserta didik mampu memelihara kesehatan mental spiritual dengan memadukan rasa takut dan harapan yang optimis kepada Allah Swt.'
        ],
        clilTerms: [
          { term: 'Khauf', arabic: 'خَوْفٌ', definition: 'Rasa takut yang menggetarkan hati terhadap siksa dan kemurkaan Allah sehingga mencegah diri dari berbuat maksiat.' },
          { term: 'Raja\'', arabic: 'رَجَاءٌ', definition: 'Harapan optimis yang besar akan luasnya ampunan, rahmat, dan surga Allah Swt.' },
          { term: 'Al-Qunut', arabic: 'الْقُنُوطُ مِنْ رَحْمَةِ اللهِ', definition: 'Sikap putus asa dari rahmat Allah yang dilarang keras dalam Islam.' }
        ],
        ealVocabulary: [
          { term: 'Fear of God', arabic: 'خَوْفُ اللهِ', indonesian: 'Rasa Takut kepada Allah', hint: 'Awe and dread of divine displeasure' },
          { term: 'Hope in Mercy', arabic: 'رَجَاءٌ', indonesian: 'Harapan / Optimisme Rahmat', hint: 'Yearning for divine forgiveness' }
        ],
        struggledScaffold: {
          title: 'Ilustrasi Dua Sayap Burung Keimanan',
          strategies: [
            'Visualisasi burung terbang: Sayap kanan = Raja\', Sayap kiri = Khauf, Kepala = Cinta (Mahabbah). Jika salah satu patah, burung akan jatuh.',
            'Kartu skenario: Mengidentifikasi kondisi kapan harus memperbesar porsi khauf dan kapan porsi raja\'.'
          ],
          scaffoldGuidance: 'Ingatkan perkataan ulama: Saat sehat perbanyak khauf, saat sakit/menjelang ajal dominankan raja\'.'
        },
        ealSupport: {
          title: 'Bagan Keseimbangan Jiwa Mukmin',
          visualSupport: 'Timbangan seimbang antara Khauf dan Raja\' dengan teks Al-Qur\'an.',
          starterPrompts: [
            'Khauf mencegah manusia dari berbuat ...',
            'Raja\' mencegah manusia dari sikap ...'
          ]
        },
        extensionChallenge: {
          title: 'Kajian Kitab Madarijus Salikin Ibnul Qayyim',
          challengeTask: 'Menganalisis bab "Manazil Iyyaka Na\'budu wa Iyyaka Nasta\'in" karya Ibnul Qayyim al-Jauziyyah tentang kedudukan Khauf, Raja\', dan Tawakkal.',
          realWorldContext: 'Solusi mengatasi kecemasan eksistensial dan depresi pada remaja melalui terapi spiritual qalbiyah.'
        },
        default5E: {
          starterStimulus: 'Kisah orang yang telah membunuh 99 nyawa lalu bertaubat dan mengharap rahmat Allah.',
          engage: 'Pertanyaan: Apakah orang yang berlumur dosa masih berhak berharap masuk surga?',
          explore: 'Menganalisis firman Allah dalam Q.S. az-Zumar/39:53 (La taqnatu mir-rahmatillah).',
          explain: 'Penjelasan integrasi konsep Khauf, Raja\', Tawakkal, dan syarat taubat nasuha.',
          elaborate: 'Diskusi: Mengapa rasa takut kepada Allah berbeda dengan rasa takut kepada binatang buas?',
          evaluate: 'Exit ticket: Tuliskan satu kondisi di mana kamu harus menghadirkan sikap raja\'.'
        }
      },
      {
        id: 'y10-b7-st2',
        title: "Integrasi Khauf, Raja', Tawakkal, Taubat dalam Keseharian & Ibadah Ramadhan",
        objectives: [
          {
            id: 'obj-y10-b7-3',
            text: "Peserta didik mampu merefleksikan integrasi khauf, raja', tawakal dan taubat dalam kehidupan sehari-hari; menerapkan keempatnya sebagai manifestasi iman yang sempurna."
          },
          {
            id: 'obj-y10-b7-4',
            text: "Peserta didik mampu merefleksikan khauf, raja', tawakal dan taubat dalam konteks ibadah Ramadhan; menganalisis kaitan ketiganya."
          },
          {
            id: 'obj-y10-b7-5',
            text: "Peserta didik mampu mereview seluruh materi Bab 7 secara terpadu; siap menghadapi Common Assessment Bab 7."
          }
        ],
        defaultWalt: [
          'Memahami hakikat tawakkal yang benar (didahului ikhtiar maksimal, bukan fatalisme)',
          'Menjelaskan syarat-syarat taubat nasuha (menyesal, berhenti, bertekad tidak mengulangi, mengembalikan hak orang lain)',
          'Merefleksikan keempat pilar hati dalam mengoptimalkan ibadah bulan suci Ramadhan'
        ],
        defaultWilf: [
          'Saya dapat menjelaskan kisah unta yang harus diikat sebelum bertawakkal.',
          'Saya dapat menyebutkan 4 syarat taubat nasuha jika berkaitan dengan dosa kepada sesama manusia.',
          'Saya dapat merancang jurnal refleksi taubat dan muhasabah diri menyongsong Ramadhan.'
        ],
        defaultSlo: [
          'Peserta didik mampu menampilkan ketenangan jiwa, kepasrahan aktif setelah berikhtiar (tawakkal), dan gemar beristighfar memperbaiki diri.'
        ],
        clilTerms: [
          { term: 'Tawakkal', arabic: 'تَوَكُّلٌ', definition: 'Menyerahkan segala urusan dan hasil ikhtiar kepada Allah dengan keyakinan penuh bahwa ketetapan-Nya adalah yang terbaik.' },
          { term: 'Taubat Nasuha', arabic: 'تَوْبَةٌ نَصُوحًا', definition: 'Taubat yang tulus, murni, dan sungguh-sungguh dengan tekad bulat tidak kembali kepada kemaksiatan.' },
          { term: 'Istighfar', arabic: 'اِسْتِغْفَارٌ', definition: 'Permohonan ampunan kepada Allah Swt. dengan merendahkan hati atas dosa dan kekhilafan.' }
        ],
        ealVocabulary: [
          { term: 'Reliance on God', arabic: 'تَوَكُّلٌ عَلَى اللهِ', indonesian: 'Tawakal kepada Allah', hint: 'Active trust and reliance after doing one\'s best' },
          { term: 'Sincere Repentance', arabic: 'تَوْبَةٌ نَصُوحٌ', indonesian: 'Taubat Nasuha', hint: 'Genuine remorse and turning back to God' }
        ],
        struggledScaffold: {
          title: 'Langkah Syarat Taubat Nasuha',
          strategies: [
            'Bagan alur 4 langkah taubat: An-Nadam (Menyesali), Al-Iqla\' (Meninggalkan dosa seketika), Al-\'Azm (Bertekad tidak mengulangi), Al-Bara\'ah (Menyelesaikan kezaliman antarmanusia).',
            'Analogi tawakkal: Menanam benih, menyiram tanaman, baru bertawakkal menunggu panen.'
          ],
          scaffoldGuidance: 'Luruskan kesalahpahaman bahwa tawakkal bukanlah diam tanpa berusaha.'
        },
        ealSupport: {
          title: 'Kata Kunci Doa Taubat & Tawakkal',
          visualSupport: 'Kartu doa Sayyidul Istighfar dan doa keluar rumah "Bismillahi tawakkaltu \'alallah".',
          starterPrompts: [
            'Tawakkal yang benar harus diawali dengan ...',
            'Jika kita berbuat zalim kepada teman, syarat taubatnya ditambah dengan ...'
          ]
        },
        extensionChallenge: {
          title: 'Rancangan Program Spiritual Ramadhan Mandiri',
          challengeTask: 'Menyusun "Ramadhan Spiritual Transformation Tracker" yang memadukan target ibadah harian dengan muhasabah taubat dan tawakkal sebelum menghadapi ujian sekolah.',
          realWorldContext: 'Meningkatkan produktivitas ibadah dan kestabilan mental di bulan Ramadhan.'
        },
        default5E: {
          starterStimulus: 'Audio lantunan Sayyidul Istighfar beserta makna filosofis pengakuan dosa dan keagungan nikmat.',
          engage: 'Apersepsi: Mengapa seorang mukmin yang sudah belajar keras tetap wajib bertawakkal saat membagikan lembar jawaban ujian?',
          explore: 'Menganalisis hadis Nabi tentang ikatlah untamu kemudian bertawakkallah (HR. Tirmidzi).',
          explain: 'Penjelasan rukun dan syarat taubat nasuha serta korelasi keempat sikap batin dalam Ramadhan.',
          elaborate: 'Praktik muhasabah diri dan menuliskan komitmen perbaikan akhlak pribadi.',
          evaluate: 'Exit ticket: Mengapa istighfar menjadi kunci dibukanya pintu rezeki dan ketenangan hati?'
        }
      }
    ]
  },
  {
    id: 'y10-bab8',
    chapterNumber: 'Bab 8',
    title: 'Penyakit Hati: Ghadhab dan Ghibah',
    yearGroup: 'Year 10',
    subtopics: [
      {
        id: 'y10-b8-st1',
        title: "Konsep Ghadhab (Marah), Tingkatan, dan Cara Mengendalikannya",
        objectives: [
          {
            id: 'obj-y10-b8-1',
            text: 'Peserta didik mampu menganalisis konsep ghadhab dan tingkatan-tingkatannya; mengidentifikasi penyebab sifat temperamental menurut Islam.'
          },
          {
            id: 'obj-y10-b8-2',
            text: 'Peserta didik mampu menerapkan cara mengendalikan ghadhab berdasarkan sunnah Rasulullah dalam situasi nyata.'
          }
        ],
        defaultWalt: [
          'Memahami hakikat ghadhab (marah) dan tingkatan emosi manusia',
          'Mengidentifikasi pemicu perilaku temperamental dalam kehidupan sehari-hari',
          'Menerapkan tahapan manajemen amarah sesuai petunjuk sunnah Nabi ﷺ'
        ],
        defaultWilf: [
          'Saya dapat menjelaskan sabda Rasulullah: "Bukanlah orang kuat itu yang menang gulat, tetapi yang mampu menahan amarahnya".',
          'Saya dapat mengurutkan 4 langkah sunnah meredakan marah (Ta\'awwudz, Diam, Duduk/Berbaring, Berwudhu).',
          'Saya dapat mendemonstrasikan respon tenang ketika menghadapi provokasi teman.'
        ],
        defaultSlo: [
          'Peserta didik mampu mengendalikan emosi amarah (emotional quotient) berlandaskan ajaran akhlak kenabian.'
        ],
        clilTerms: [
          { term: 'Ghadhab', arabic: 'غَضَبٌ', definition: 'Gejolak emosi kemarahan yang dipicu oleh pengaruh setan yang berpotensi merusak akal budi.' },
          { term: 'Kazhmul Ghaizh', arabic: 'كَظْمُ الْغَيْظِ', definition: 'Kemampuan menahan amarah yang membara di dada padahal mampu untuk melampiaskannya.' },
          { term: 'Hilim', arabic: 'حِلْمٌ', definition: 'Sifat penyantun, sabar, dan tidak tergesa-gesa membalas keburukan.' }
        ],
        ealVocabulary: [
          { term: 'Anger Management', arabic: 'كَظْمُ الْغَيْظِ', indonesian: 'Manajemen Amarah', hint: 'Controlling rage through prophetic guidance' },
          { term: 'Forbearance', arabic: 'حِلْمٌ', indonesian: 'Sifat Santun & Sabar', hint: 'Patience and self-restraint' }
        ],
        struggledScaffold: {
          title: 'Algoritma Meredam Amarah Sunnah',
          strategies: [
            'Bagan alur 4 langkah praktis saat marah: 1. Baca Ta\'awwudz -> 2. Diam (jangan bicara) -> 3. Berubah posisi (berdiri ke duduk, duduk ke berbaring) -> 4. Berwudhu dengan air dingin.',
            'Latihan teknik pernapasan sadar (mindful breathing) berzikir.'
          ],
          scaffoldGuidance: 'Jelaskan hikmah wudhu: amarah berasal dari api setan, dan api hanya padam dengan air.'
        },
        ealSupport: {
          title: 'Infografis Pertolongan Pertama Saat Marah',
          visualSupport: 'Poster grafis "Stop, Breathe, Wudhu, Forgive" dengan teks dwi bahasa.',
          starterPrompts: [
            'Orang yang paling kuat menurut Islam adalah orang yang mampu mengendalikan ...',
            'Ketika marah saat berdiri, sunnah Nabi menyuruh kita untuk ...'
          ]
        },
        extensionChallenge: {
          title: 'Studi Neurosains: Amygdala Hijack vs Kazhmul Ghaizh',
          challengeTask: 'Membuat analisis korelasi antara respon pembajakan amigdala (fight or flight) dalam biologi dengan efektivitas sunnah diam dan berwudhu.',
          realWorldContext: 'Mencegah tindak kekerasan pelajar dan perkelahian di lingkungan sekolah asrama.'
        },
        default5E: {
          starterStimulus: 'Video rekaman aksi pertikaian jalanan akibat emosi sesaat yang berujung penyesalan dan penjara.',
          engage: 'Polling: Hal apa yang paling cepat memicu amarahmu dalam pergaulan sekolah?',
          explore: 'Menelaah hadis Rasulullah yang mengulang tiga kali pesan: "La taghdhab wa lakal jannah" (Jangan marah bagimu surga).',
          explain: 'Penjelasan tingkatan amarah (tafrith, i\'tidal, ifrath) dan bahaya medis darah tinggi serta stroke.',
          elaborate: 'Simulasi kasus: Cara merespons dengan asertif dan kepala dingin saat dituduh berbuat salah.',
          evaluate: 'Exit ticket: Tuliskan doa ketika merasakan gejolak amarah membakar hati.'
        }
      },
      {
        id: 'y10-b8-st2',
        title: "Konsep Ghibah, Perbedaannya dengan Fitnah, Namimah, Kritik & Tabayun",
        objectives: [
          {
            id: 'obj-y10-b8-3',
            text: 'Peserta didik mampu menganalisis konsep-konsep ghibah berdasarkan dalil dan mengidentifikasi perbedaan ghibah, fitnah, namimah, kritik nasihat dan tabayun.'
          },
          {
            id: 'obj-y10-b8-4',
            text: 'Peserta didik mampu menerapkan cara mengendalikan ghibah dan menganalisis berbagai permasalahan yang berkaitan dengan perilaku ghibah dalam kehidupan sehari-hari.'
          },
          {
            id: 'obj-y10-b8-5',
            text: 'Peserta didik mampu mereview seluruh materi Bab 8 secara terpadu; siap menghadapi Common Assessment Bab 8.'
          }
        ],
        defaultWalt: [
          'Membedakan definisi ghibah (menggunjing), fitnah, namimah (adu domba), dan kritik konstruktif',
          'Menganalisis perumpamaan memakan bangkai saudara sendiri dalam Q.S. al-Hujurat/49:12',
          'Menerapkan prinsip tabayun dan menjaga lisan dari pembicaraan sia-sia di media sosial'
        ],
        defaultWilf: [
          'Saya dapat menjelaskan perbedaan esensial antara ghibah (fakta yang dibenci) dan buhtan/fitnah (tuduhan palsu).',
          'Saya dapat menguraikan 6 kondisi ghibah yang diperbolehkan syariat (seperti melaporkan kezaliman kepada hakim).',
          'Saya dapat mempraktikkan langkah tabayun sebelum mempercayai atau membagikan rumor tentang teman.'
        ],
        defaultSlo: [
          'Peserta didik mampu membersihkan lisan dan jari dari membicarakan aib sesama serta menjadi agen perdamaian (anti namimah).'
        ],
        clilTerms: [
          { term: 'Ghibah', arabic: 'غِيبَةٌ', definition: 'Menceritakan keburukan atau aib seseorang di belakangnya yang sekiranya ia dengar ia tidak menyukainya.' },
          { term: 'Buhtan / Fitnah', arabic: 'بُهْتَانٌ', definition: 'Menuduhkan keburukan atau kejahatan kepada seseorang padahal ia tidak pernah melakukannya.' },
          { term: 'Namimah', arabic: 'نَمِيمَةٌ', definition: 'Mengadu domba dan memindahkan ucapan seseorang ke orang lain dengan tujuan merusak hubungan silaturrahim.' },
          { term: 'Tabayun', arabic: 'تَبَيُّنٌ', definition: 'Meneliti, memeriksa, dan memverifikasi kebenaran suatu berita sebelum mengambil kesimpulan.' }
        ],
        ealVocabulary: [
          { term: 'Backbiting', arabic: 'غِيبَةٌ', indonesian: 'Ghibah / Menggunjing', hint: 'Speaking ill of someone behind their back' },
          { term: 'Verification', arabic: 'تَبَيُّنٌ', indonesian: 'Tabayun / Cek Fakta', hint: 'Verifying factual authenticity' }
        ],
        struggledScaffold: {
          title: 'Matriks Identifikasi Lisan',
          strategies: [
            'Tabel komparasi 5 kolom: Ghibah, Fitnah, Namimah, Kritik Nasihat, Tabayun.',
            'Filter 3 saringan Socrates versi Islami: Apakah ini Benar? Apakah ini Baik? Apakah ini Bermanfaat?'
          ],
          scaffoldGuidance: 'Bimbing siswa memahami bahwa ghibah tetap haram meskipun apa yang diomongkan adalah fakta kenyataan.'
        },
        ealSupport: {
          title: 'Visual Q.S. al-Hujurat Ayat 12',
          visualSupport: 'Kaligrafi firman Allah tentang larangan tajassus dan memakan daging bangkai saudara sendiri.',
          starterPrompts: [
            'Perbedaan utama ghibah dan fitnah adalah ...',
            'Sikap kita saat teman di samping mulai membicarakan aib orang lain adalah ...'
          ]
        },
        extensionChallenge: {
          title: 'Analisis Akun Gosip & Sensasionalisme Media Hiburan',
          challengeTask: 'Membuat telaah hukum fikih tentang monetisasi akun gosip (infotainment) di platform media sosial dari kacamata hadis larangan ghibah dan namimah.',
          realWorldContext: 'Literasi etika bermedia bagi generasi digital agar tidak menjadi konsumen atau produsen hoaks.'
        },
        default5E: {
          starterStimulus: 'Video analogi seorang bijak menyuruh muridnya menyebarkan bulu ayam di jalan lalu menyuruh mengumpulkannya kembali (sulitnya menarik kata ghibah).',
          engage: 'Pertanyaan: Mengapa membicarakan aib orang lain terasa "manis" dan adiktif bagi lisan manusia?',
          explore: 'Bedah dalil Q.S. al-Hujurāt/49:12 dan dialog hadis Nabi dengan para sahabat mengenai makna ghibah.',
          explain: 'Penjelasan bahaya namimah yang menghalangi masuk surga (La yadkhulul jannata qattat) dan adab tabayun.',
          elaborate: 'Studi kasus grup WhatsApp kelas: Bagaimana meredam pergunjingan ketika ada yang memulai obrolan negatif.',
          evaluate: 'Exit ticket: Tuliskan satu cara elegan untuk mengalihkan topik saat berada dalam lingkaran perkumpulan ghibah.'
        }
      }
    ]
  },
  {
    id: 'y10-bab9',
    chapterNumber: 'Bab 9',
    title: 'Menerapkan Ekonomi Syariah, dan Wakaf',
    yearGroup: 'Year 10',
    subtopics: [
      {
        id: 'y10-b9-st1',
        title: 'Tiga Pilar Ekonomi Syariah, Riba, Gharar, Maysir, serta Akad Murabahah & Mudharabah',
        objectives: [
          {
            id: 'obj-y10-b9-1',
            text: 'Peserta didik mampu menerapkan dan merefleksikan tiga pilar ekonomi syariah (keadilan, kemaslahatan, kejujuran) dengan mengidentifikasi serta menghindari praktik riba, gharar, dan maysir dalam kehidupan sehari-hari.'
          },
          {
            id: 'obj-y10-b9-2',
            text: 'Peserta didik mampu menerapkan dan merefleksikan konsep akad murabahah dan mudharabah melalui analisis kritis terhadap transaksi digital kontemporer (seperti paylater syariah, dompet digital, dan crowdfunding syariah).'
          }
        ],
        defaultWalt: [
          'Memahami 3 pilar ekonomi syariah (keadilan, kemaslahatan, kejujuran)',
          'Mengidentifikasi dan menjauhi praktik riba, gharar (ketidakjelasan), dan maysir (judi)',
          'Menganalisis skema akad jual beli murabahah dan bagi hasil mudharabah pada fintech modern'
        ],
        defaultWilf: [
          'Saya dapat membedakan antara transaksi jual-beli yang halal dengan transaksi riba ribawi.',
          'Saya dapat menjelaskan bahaya maysir dalam game online berkedok gacha / mystery box.',
          'Saya dapat memetakan skema pembiayaan murabahah antara bank syariah, nasabah, dan supplier.'
        ],
        defaultSlo: [
          'Peserta didik memiliki literasi finansial syariah yang kokoh dan bijak dalam menggunakan aplikasi keuangan digital kontemporer.'
        ],
        clilTerms: [
          { term: 'Riba', arabic: 'رِبًا', definition: 'Tambahan pembayaran yang disyaratkan atas transaksi pinjam meminjam tanpa adanya kompensasi riil yang dibenarkan syariat.' },
          { term: 'Gharar', arabic: 'غَرَرٌ', definition: 'Unsur ketidakpastian atau ketidakjelasan dalam transaksi yang merugikan salah satu pihak.' },
          { term: 'Maysir', arabic: 'مَيْسِرٌ', definition: 'Segala bentuk perjudian atau transaksi spekulatif untung-untungan tanpa kerja riil.' },
          { term: 'Murabahah', arabic: 'مُرَابَحَةٌ', definition: 'Akad jual beli barang dengan menyatakan harga perolehan dan margin keuntungan yang disepakati bersama.' },
          { term: 'Mudharabah', arabic: 'مُضَارَبَةٌ', definition: 'Akad kerja sama kemitraan antara pemilik modal (shahibul mal) dan pengelola usaha (mudharib) dengan bagi hasil sesuai nisbah.' }
        ],
        ealVocabulary: [
          { term: 'Islamic Finance', arabic: 'اِقْتِصَادٌ إِسْلَامِيٌّ', indonesian: 'Keuangan Syariah', hint: 'Finance system adhering to Sharia law' },
          { term: 'Usury / Interest', arabic: 'رِبًا', indonesian: 'Riba / Bunga Pinjaman', hint: 'Unlawful interest on loans' }
        ],
        struggledScaffold: {
          title: 'Diagram Skema Akad Finansial',
          strategies: [
            'Visualisasi alur transaksi Murabahah (Bank membeli barang -> menjual ke nasabah dengan cicilan jelas).',
            'Tabel perbedaan Bunga Bank Konvensional vs Bagi Hasil Syariah.'
          ],
          scaffoldGuidance: 'Tekankan bahwa dalam Islam, uang berfungsi sebagai alat tukar dan satuan hitung, bukan komoditas yang diperjualbelikan.'
        },
        ealSupport: {
          title: 'Bagan Larangan Transaksi (MAGHRIB: Maysir, Gharar, Haram, Riba)',
          visualSupport: 'Grafik akronim larangan transaksi muamalah dalam Islam.',
          starterPrompts: [
            'Tiga pilar pokok ekonomi syariah adalah ...',
            'Perbedaan jual beli dan riba menurut Q.S. al-Baqarah ayat 275 adalah ...'
          ]
        },
        extensionChallenge: {
          title: 'Kajian Kritis Paylater Syariah vs Paylater Konvensional',
          challengeTask: 'Menganalisis syarat dan ketentuan (T&C) aplikasi paylater di Indonesia: Mengkaji adanya denda keterlambatan (ta\'zir vs bunga) dan transparansi akad.',
          realWorldContext: 'Mencegah generasi muda terjebak dalam jebakan utang konsumtif dan pinjol.'
        },
        default5E: {
          starterStimulus: 'Berita fenomena generasi muda terjerat pinjol ilegal dan judi online slot hingga ratusan juta rupiah.',
          engage: 'Pertanyaan: Mengapa Islam menghalalkan jual beli tetapi melarang keras riba dan maysir?',
          explore: 'Simulasi pasar syariah: Praktik transaksi murabahah dan mudharabah di kelas.',
          explain: 'Kajian ayat Q.S. al-Baqarah/2:275-279 dan hadis larangan gharar dalam jual beli.',
          elaborate: 'Analisis studi kasus: Hukum cashback dompet digital (e-wallet) menurut fatwa DSN-MUI.',
          evaluate: 'Exit ticket: Tuliskan satu perbedaan mendasar antara sistem bunga bank dan sistem bagi hasil.'
        }
      },
      {
        id: 'y10-b9-st2',
        title: 'Ketentuan Wakaf, Rukun, Pengelolaan Modern (Cash Waqf), dan Solusi Finansial',
        objectives: [
          {
            id: 'obj-y10-b9-3',
            text: 'Peserta didik mampu menerapkan dan merefleksikan ketentuan fikih wakaf dengan menganalisis lima rukun wakaf (wakif, mauquf, mauquf \'alaih, nazhir, shighat) sebagai instrumen kepedulian sosial.'
          },
          {
            id: 'obj-y10-b9-4',
            text: 'Peserta didik mampu menerapkan dan merefleksikan urgensi pengelolaan wakaf modern melalui analisis profil lembaga pengelola wakaf uang (cash waqf) digital dan tantangan pengembangan wakaf produktif.'
          },
          {
            id: 'obj-y10-b9-5',
            text: 'Peserta didik mampu menerapkan dan merefleksikan solusi ekonomi syariah dan gerakan wakaf dalam menyikapi tantangan finansial nyata (seperti jeratan pinjaman online ilegal, judi online, dan kesenjangan sosial di sekolah).'
          }
        ],
        defaultWalt: [
          'Memahami hakikat fikih wakaf dan kelima rukun wakaf',
          'Menganalisis transformasi wakaf tanah/bangunan ke wakaf uang produktif (Cash Waqf Linked Sukuk)',
          'Merumuskan gerakan filantropi Islam untuk pengentasan kemiskinan dan beasiswa pendidikan'
        ],
        defaultWilf: [
          'Saya dapat menyebutkan 5 rukun wakaf beserta syarat-syaratnya.',
          'Saya dapat menjelaskan bagaimana wakaf uang produktif dapat membiayai rumah sakit dan sekolah gratis.',
          'Saya dapat membedakan antara sedekah biasa dengan wakaf (pokok harta ditahan, manfaat dialirkan).'
        ],
        defaultSlo: [
          'Peserta didik memiliki kepekaan sosial filantropi dan mampu menginisiasi gerakan wakaf uang mini untuk kemaslahatan sesama.'
        ],
        clilTerms: [
          { term: 'Wakaf', arabic: 'وَقْفٌ', definition: 'Menahan pokok harta yang dapat diambil manfaatnya secara kekal untuk kemaslahatan umum di jalan Allah.' },
          { term: 'Nazhir', arabic: 'نَاظِرٌ', definition: 'Pihak yang menerima dan diberi amanah mengelola serta mengembangkan harta benda wakaf.' },
          { term: 'Mauquf \'Alaih', arabic: 'مَوْقُوفٌ عَلَيْهِ', definition: 'Penerima manfaat atau peruntukan dari hasil pengelolaan harta benda wakaf.' },
          { term: 'Wakaf Uang', arabic: 'وَقْفُ النُّقُودِ', definition: 'Wakaf berupa uang tunai yang diinvestasikan secara produktif untuk kemudian labanya disalurkan kepada mauquf alaih.' }
        ],
        ealVocabulary: [
          { term: 'Endowment / Waqf', arabic: 'وَقْفٌ', indonesian: 'Wakaf', hint: 'Perpetual charitable trust in Islam' },
          { term: 'Trustee / Manager', arabic: 'نَاظِرُ الْوَقْفِ', indonesian: 'Nazhir Wakaf', hint: 'Custodian of endowment assets' }
        ],
        struggledScaffold: {
          title: 'Bagan 5 Rukun Wakaf',
          strategies: [
            'Bagan alur 5 rukun: Wakif (pewakaf) -> Mauquf (harta) -> Shighat (ikrar) -> Nazhir (pengelola) -> Mauquf \'Alaih (penerima).',
            'Kisah sumur Raumah yang diwakafkan oleh Sahabat Utsman bin Affan r.a.'
          ],
          scaffoldGuidance: 'Jelaskan bahwa pokok harta wakaf tidak boleh dijual, dihibahkan, atau diwariskan.'
        },
        ealSupport: {
          title: 'Infografis Ekosistem Wakaf Produktif',
          visualSupport: 'Bagan alir dana wakaf uang dari investor/wakif ke proyek produktif hingga menghasilkan surplus beasiswa.',
          starterPrompts: [
            'Perbedaan utama wakaf dengan sedekah biasa adalah pokok hartanya harus ...',
            'Tugas utama nazhir wakaf adalah mengelola harta agar ...'
          ]
        },
        extensionChallenge: {
          title: 'Rancangan Proyek Mini Cash Waqf Sekolah',
          challengeTask: 'Menyusun model bisnis sosial wakaf uang siswa Semesta untuk mendanai pembelian buku perpustakaan atau bantuan SPP teman yang membutuhkan.',
          realWorldContext: 'Mempraktekkan social entrepreneurship berbasis syariah di lingkungan sekolah.'
        },
        default5E: {
          starterStimulus: 'Video kisah wakaf sumur Utsman bin Affan yang rekeningnya masih aktif dan menghasilkan triliunan rupiah hingga hari ini di Madinah.',
          engage: 'Pertanyaan: Bisakah seorang pelajar yang hanya memiliki uang saku Rp 10.000 menjadi seorang wakif (pewakaf)?',
          explore: 'Menelaah profil Badan Wakaf Indonesia (BWI) dan platform digital wakaf uang nasional.',
          explain: 'Penjelasan fikih wakaf menurut mazhab Syafi\'i dan Hanafi serta undang-undang wakaf di Indonesia.',
          elaborate: 'Menyusun simulasi portofolio investasi wakaf produktif untuk fasilitas sekolah.',
          evaluate: 'Exit ticket: Mengapa wakaf disebut sebagai sedekah jariyah yang pahalanya mengalir tanpa henti?'
        }
      }
    ]
  },
  {
    id: 'y10-bab10',
    chapterNumber: 'Bab 10',
    title: 'Ulama yang Sezaman dengan Wali Songo (Di Luar Jawa)',
    yearGroup: 'Year 10',
    subtopics: [
      {
        id: 'y10-b10-st1',
        title: 'Biografi, Peran, dan Metode Dakwah Ulama Luar Jawa Sezaman Wali Songo',
        objectives: [
          {
            id: 'obj-y10-b10-1',
            text: 'Peserta didik mampu menjelaskan secara singkat biografi dan peran tokoh-tokoh ulama penyebar Islam di Indonesia luar Jawa.'
          },
          {
            id: 'obj-y10-b10-2',
            text: 'Peserta didik mampu mengidentifikasi dan menjelaskan metode dakwah para ulama penyebar Islam yang sezaman dengan Wali Songo (ceramah, kesenian, pesantren, silaturrahim) dalam konteks akulturasi budaya Nusantara.'
          },
          {
            id: 'obj-y10-b10-3',
            text: 'Peserta didik mampu menerapkan nilai-nilai dakwah damai (bil-hikmah wal-mau‘idzatil hasanah, tanpa kekerasan, santun, toleran) yang dicontohkan para ulama sezaman Wali Songo dalam interaksi sehari-hari di sekolah dan lingkungan rumah.'
          },
          {
            id: 'obj-y10-b10-4',
            text: 'Peserta didik mampu menganalisis keteladanan para ulama sezaman Wali Songo dengan cara menguraikan faktor-faktor keberhasilan dakwah mereka (pendekatan budaya, keteladanan pribadi, toleransi, kesantunan), serta membedakan antara dakwah damai dan dakwah yang berpotensi menimbulkan kekerasan.'
          }
        ],
        defaultWalt: [
          'Mengidentifikasi tokoh-tokoh ulama penyebar Islam di luar Jawa abad ke-15 hingga 16 (Sumatera, Sulawesi, Kalimantan, Maluku)',
          'Menganalisis metode dakwah ulama luar Jawa seperti Datuk Ri Bandang, Syekh Hamzah Fansuri, dan Tuan Tunggang Parangan',
          'Merefleksikan prinsip dakwah damai dan toleransi kultural di bumi Nusantara'
        ],
        defaultWilf: [
          'Saya dapat menyebutkan minimal 3 tokoh ulama luar Jawa sezaman Wali Songo beserta daerah dakwahnya.',
          'Saya dapat menjelaskan strategi pendekatan budaya Dato\' ri Bandang saat mendakwahi Kerajaan Gowa-Tallo.',
          'Saya dapat menyimpulkan 3 faktor kunci keberhasilan dakwah damai tanpa pertumpahan darah di Nusantara.'
        ],
        defaultSlo: [
          'Peserta didik memiliki wawasan kebangsaan dan keislaman yang luas tentang jejaring ulama Nusantara serta menjunjung tinggi dakwah santun.'
        ],
        clilTerms: [
          { term: 'Jejaring Ulama Nusantara', arabic: 'شَبَكَةُ عُلَمَاءِ أَرْخَبِيلْ', definition: 'Jaringan intelektual dan transmisi keilmuan Islam antara ulama Makkah-Madinah dengan ulama di berbagai penjuru kepulauan Nusantara.' },
          { term: 'Pangngaderreng', arabic: 'عُرْفٌ مَحَلِّيٌّ', definition: 'Sistem adat dan pranata sosial masyarakat Bugis-Makassar yang diharmoniskan dengan nilai syariat Islam oleh Datuk Ri Bandang.' }
        ],
        ealVocabulary: [
          { term: 'Archipelago Scholars', arabic: 'عُلَمَاءُ نُوسَانْتَارَا', indonesian: 'Ulama Nusantara', hint: 'Scholars who propagated Islam across the Indonesian islands' },
          { term: 'Peaceful Outreach', arabic: 'دَعْوَةٌ بِالسِّلْمِ', indonesian: 'Dakwah Damai', hint: 'Spreading Islam without coercion or violence' }
        ],
        struggledScaffold: {
          title: 'Peta Persebaran Ulama Sezaman Wali Songo',
          strategies: [
            'Peta kepulauan Indonesia: Menandai rute dakwah ke Aceh (Hamzah Fansuri), Minangkabau, Kutai Kertanegara (Tuan Tunggang Parangan), Gowa-Tallo (Datuk Ri Bandang, Datuk Patimang, Datuk Ri Tiro), Maluku (Sunan Giri mengutus santri).',
            'Tabel pencocokan tokoh ulama, daerah, dan pendekatan dakwah.'
          ],
          scaffoldGuidance: 'Bantu siswa menghubungkan keterkaitan para ulama tersebut dengan jejaring pendidikan di Giri Kedaton dan Aceh.'
        },
        ealSupport: {
          title: 'Profil 3 Datuk Minangkabau di Sulawesi',
          visualSupport: 'Gambar kapal pinisi dan naskah kuno beraksara pegon/lontara bernafaskan Islam.',
          starterPrompts: [
            'Tiga ulama Minangkabau yang berdakwah di Sulawesi Selatan dikenal sebagai ...',
            'Pendekatan dakwah yang digunakan ulama di luar Jawa mengutamakan ...'
          ]
        },
        extensionChallenge: {
          title: 'Analisis Filologi Manuskrip Islam Nusantara',
          challengeTask: 'Membuat riset mini mengenai karya syair tasawuf Syekh Hamzah Fansuri (seperti Syair Perahu) dan kontribusinya bagi pembentukan bahasa Melayu sebagai lingua franca.',
          realWorldContext: 'Menghargai warisan sastra dan literasi intelektual Islam dunia Melayu-Nusantara.'
        },
        default5E: {
          starterStimulus: 'Peta ekspedisi maritim Nusantara abad 15-16 dan catatan pelancong Tome Pires mengenai kerajaan Islam di luar Jawa.',
          engage: 'Pertanyaan: Mengapa dakwah Islam di Sulawesi dan Kalimantan sangat cepat diterima oleh para raja dan rakyat jelata?',
          explore: 'Eksplorasi biografi Dato\' ri Bandang (Abdul Makmur) dan metode bertahap dalam mengubah kebiasaan sabung ayam.',
          explain: 'Penjelasan integrasi adat dan syariat: "Adat basandi syarak, syarak basandi Kitabullah" dan konsep dakwah bil-hikmah.',
          elaborate: 'Diskusi komparatif: Persamaan pendekatan Wali Songo di Jawa dengan para Datuk di Sulawesi.',
          evaluate: 'Exit ticket: Tuliskan satu nilai kesantunan dakwah para ulama Nusantara yang relevan kita praktikkan di era modern.'
        }
      }
    ]
  },

  // ==========================================
  // YEAR 11 (FASE F)
  // ==========================================
  {
    id: 'y11-matrikulasi-1',
    chapterNumber: 'Matrikulasi Fiqih 1',
    title: 'Wudhu dan Shalat',
    yearGroup: 'Year 11',
    subtopics: [
      {
        id: 'y11-m1-st1',
        title: "Pemahaman dan Praktik Wudhu Sesuai Tuntunan Syari'at Islam",
        objectives: [
          {
            id: 'obj-y11-m1-1',
            text: "Siswa mampu memahami dan mempraktikkan wudhu dengan baik dan benar sesuai tuntunan syari'at Islam dalam kehidupan sehari-hari."
          }
        ],
        defaultWalt: [
          'Merefleksikan kualitas wudhu dan kesempurnaan membasuh anggota fardhu',
          'Mendalami hikmah thaharah bagi kesehatan dan kesucian batin seorang muslim',
          'Mengoreksi kekeliruan dalam berwudhu di lingkungan sekolah dan tempat tinggal'
        ],
        defaultWilf: [
          'Saya dapat menjelaskan rukun wudhu beserta dalil nash syar\'inya.',
          'Saya dapat mempraktikkan wudhu dengan tertib tanpa menyia-nyiakan air (hemat air).',
          'Saya dapat melafalkan doa sesudah wudhu dengan fasih dan memahami terjemahannya.'
        ],
        defaultSlo: [
          'Peserta didik mampu menjadikan wudhu sebagai sarana pembersihan dosa-dosa kecil dan menunaikannya secara istikamah.'
        ],
        clilTerms: [
          { term: 'Isbaghul Wudhu', arabic: 'إِسْبَاغُ الْوُضُوءِ', definition: 'Menyempurnakan wudhu dengan meratakan air ke seluruh anggota wudhu melebihi batas minimal rukun.' }
        ],
        ealVocabulary: [
          { term: 'Perfection of Ablution', arabic: 'إِسْبَاغُ الْوُضُوءِ', indonesian: 'Menyempurnakan Wudhu', hint: 'Complete and thorough washing' }
        ],
        struggledScaffold: {
          title: 'Checklist Wudhu Sempurna',
          strategies: ['Peer observation rubric untuk rukun dan sunnah wudhu.', 'Latihan praktik terpandu di tempat wudhu.'],
          scaffoldGuidance: 'Pastikan basuhan wajah mencakup dari batas tumbuhnya rambut hingga dagu.'
        },
        ealSupport: {
          title: 'Panduan Praktik Wudhu',
          visualSupport: 'Foto anatomi batas muka, tangan sampai siku, dan kaki sampai mata kaki.',
          starterPrompts: ['Batas muka yang wajib dibasuh adalah ...', 'Doa setelah wudhu mengandung pengakuan tauhid yaitu ...']
        },
        extensionChallenge: {
          title: 'Kajian Fiqih Ekologis Wudhu',
          challengeTask: 'Membuat rancangan sistem daur ulang air wudhu (greywater recycling) untuk menyiram tanaman sekolah.',
          realWorldContext: 'Implementasi eco-pesantren / eco-school berbasis nilai syariat thaharah.'
        },
        default5E: {
          starterStimulus: 'Hadis tentang tetesan air wudhu yang menggugurkan dosa-dosa kecil dari wajah, tangan, dan kaki.',
          engage: 'Diagnostik: Sebutkan 1 sunnah wudhu yang paling sering kamu lupakan.',
          explore: 'Praktik langsung wudhu berpasangan dengan saling mengecek ketepatan rukun.',
          explain: 'Penjelasan hikmah isbaghul wudhu dan doa pasca wudhu.',
          elaborate: 'Menilai efisiensi keran wudhu sekolah guna mencegah pemborosan air.',
          evaluate: 'Exit ticket: Tuliskan doa sesudah wudhu dalam tulisan Arab atau latin beserta artinya.'
        }
      },
      {
        id: 'y11-m1-st2',
        title: "Pemahaman dan Praktik Shalat Sesuai Tuntunan Syari'at Islam",
        objectives: [
          {
            id: 'obj-y11-m1-2',
            text: "Siswa mampu memahami dan mempraktikkan shalat dengan baik dan benar sesuai tuntunan syari'at Islam dalam kehidupan sehari-hari."
          }
        ],
        defaultWalt: [
          'Mendalami esensi shalat sebagai tiang agama dan pencegah perbuatan fahsya\' dan munkar',
          'Menyempurnakan thuma\'ninah pada seluruh gerakan rukun shalat',
          'Memperbaiki bacaan surat pendek dan doa-doa rukun shalat'
        ],
        defaultWilf: [
          'Saya dapat mempraktikkan gerakan ruku\' dan sujud dengan punggung lurus dan thuma\'ninah sempurna.',
          'Saya dapat melafalkan doa iftitah dan tasyahhud dengan makhraj dan harakat yang benar.',
          'Saya dapat menjelaskan syarat sah sujud di atas tempat shalat.'
        ],
        defaultSlo: [
          'Peserta didik mampu mendirikan shalat secara khusyuk dan tepat waktu serta merefleksikan akhlak shalat dalam keseharian.'
        ],
        clilTerms: [
          { term: 'Iqamatus Shalah', arabic: 'إِقَامَةُ الصَّلَاةِ', definition: 'Mendirikan shalat secara berkesinambungan dengan menjaga rukun, syarat, waktu, dan kekhusyukannya.' }
        ],
        ealVocabulary: [
          { term: 'Establishing Prayer', arabic: 'إِقَامَةُ الصَّلَاةِ', indonesian: 'Mendirikan Shalat', hint: 'Proper and regular performance of prayer' }
        ],
        struggledScaffold: {
          title: 'Koreksi Gerakan Shalat',
          strategies: ['Simulasi peragaan di depan cermin/kamera untuk mengecek kelurusan punggung saat ruku\'.', 'Talaqqi bacaan shalat.'],
          scaffoldGuidance: 'Bimbing siswa pada ketepatan posisi 7 anggota sujud menempel di lantai.'
        },
        ealSupport: {
          title: 'Ilustrasi 7 Anggota Sujud',
          visualSupport: 'Gambar 7 anggota sujud: kening beserta hidung, kedua telapak tangan, kedua lutut, dan ujung jari jemari kedua kaki.',
          starterPrompts: ['Tujuh anggota badan yang wajib menempel saat sujud adalah ...', 'Hikmah shalat mencegah perbuatan ...']
        },
        extensionChallenge: {
          title: 'Esai Reflektif Khusyuk di Tengah Distraksi Era Digital',
          challengeTask: 'Menuliskan kiat mencapai shalat khusyuk di era notifikasi ponsel yang terus menerus berdering.',
          realWorldContext: 'Membangun ketenangan batin (mindfulness islami) bagi remaja SMA.'
        },
        default5E: {
          starterStimulus: 'Kutipan firman Allah dalam Q.S. al-Ankabut/29:45: "Innash-shalata tanha \'anil fahsya\'i wal munkar".',
          engage: 'Pertanyaan: Mengapa ada orang yang rajin shalat tapi masih suka berbohong atau menggunjing?',
          explore: 'Praktik shalat berjamaah di mushalla sekolah dengan fokus thuma\'ninah.',
          explain: 'Penjelasan rincian 7 anggota badan saat sujud dan makna bacaan di antara dua sujud.',
          elaborate: 'Menyusun komitmen tidak menunda shalat fardhu ketika azan berkumandang.',
          evaluate: 'Exit ticket: Tuliskan doa duduk di antara dua sujud dan makna permohonan "Warzuqni".'
        }
      }
    ]
  },
  {
    id: 'y11-matrikulasi-2',
    chapterNumber: 'Matrikulasi Fiqih 2',
    title: 'Tayammum dan Mandi Wajib',
    yearGroup: 'Year 11',
    subtopics: [
      {
        id: 'y11-m2-st1',
        title: "Pemahaman dan Praktik Tayammum Sesuai Tuntunan Syari'at Islam",
        objectives: [
          {
            id: 'obj-y11-m2-1',
            text: "Siswa mampu memahami dan mempraktikkan tayammum dengan baik dan benar sesuai tuntunan syari'at Islam dalam kehidupan sehari-hari."
          }
        ],
        defaultWalt: [
          'Memahami sebab-sebab diperbolehkannya tayammum (rukhshah) sebagai kemudahan dalam Islam',
          'Mengidentifikasi syarat debu/tanah yang suci untuk bertayammum',
          'Mendemonstrasikan tata cara tayammum dengan dua tepukan sesuai sunnah'
        ],
        defaultWilf: [
          'Saya dapat menyebutkan 3 kondisi yang membolehkan tayammum.',
          'Saya dapat mempraktikkan tayammum dengan mengusap wajah dan kedua tangan hingga pergelangan/siku.',
          'Saya dapat menjelaskan hal-hal yang membatalkan tayammum.'
        ],
        defaultSlo: [
          'Peserta didik mampu memanfaatkan rukhshah tayammum saat berada dalam kondisi darurat seperti sakit atau perjalanan jauh.'
        ],
        clilTerms: [
          { term: 'Rukhshah', arabic: 'رُخْصَةٌ', definition: 'Keringanan hukum syariat yang diberikan kepada mukallaf karena adanya uzur tertentu.' },
          { term: 'Sha\'idan Thayyiba', arabic: 'صَعِيدًا طَيِّبًا', definition: 'Permukaan bumi berupa debu atau tanah yang suci dan bersih.' }
        ],
        ealVocabulary: [
          { term: 'Dry Ablution', arabic: 'تَيَمُّمٌ', indonesian: 'Tayammum', hint: 'Purification with clean dust/earth' }
        ],
        struggledScaffold: {
          title: 'Langkah Praktis Tayammum',
          strategies: ['Bagan urutan tepukan debu -> usap wajah -> tepukan debu -> usap tangan.', 'Praktik simulasi menggunakan media berdebu suci di kelas.'],
          scaffoldGuidance: 'Jelaskan bahwa satu tayammum hanya berlaku untuk satu kali shalat fardhu menurut mazhab Syafi\'i.'
        },
        ealSupport: {
          title: 'Gambar Tata Cara Tayammum',
          visualSupport: 'Kartu panduan bergambar menepuk debu, menipiskan debu dengan meniup, lalu mengusap.',
          starterPrompts: ['Sebab utama dibolehkannya tayammum adalah tidak adanya ... atau karena ...', 'Anggota badan yang diusap dalam tayammum hanyalah ...']
        },
        extensionChallenge: {
          title: 'Panduan Ibadah Saat Penerbangan Internasional',
          challengeTask: 'Membuat buku saku kecil tentang tata cara tayammum dan shalat di pesawat terbang saat perjalanan lintas benua.',
          realWorldContext: 'Kesiapan mobilitas global siswa Semesta saat studi tour ke luar negeri.'
        },
        default5E: {
          starterStimulus: 'Studi kasus seorang musafir di padang pasir atau pasien di ruang isolasi rumah sakit yang tidak boleh terkena air.',
          engage: 'Pertanyaan: Mengapa Allah mensyariatkan tayammum dengan debu, bukan dengan zat cair lain?',
          explore: 'Praktik simulasi bertayammum di dinding atau permukaan meja yang bersih.',
          explain: 'Penjelasan dalil Q.S. an-Nisā’/4:43 dan hadis Nabi mengenai bumi dijadikan sebagai tempat sujud dan alat bersuci.',
          elaborate: 'Diskusi: Kapan tayammum batal seketika saat shalat berlangsung?',
          evaluate: 'Exit ticket: Tuliskan dua anggota tubuh yang diusap saat tayammum.'
        }
      },
      {
        id: 'y11-m2-st2',
        title: "Pemahaman dan Praktik Mandi Wajib Sesuai Tuntunan Syari'at Islam",
        objectives: [
          {
            id: 'obj-y11-m2-2',
            text: "Siswa mampu memahami dan mempraktikkan mandi wajib dengan baik dan benar sesuai tuntunan syari'at Islam dalam kehidupan sehari-hari."
          }
        ],
        defaultWalt: [
          'Memahami sebab-sebab wajib mandi (junub/ihtilam, haid, nifas, wiladah)',
          'Mengidentifikasi rukun mandi wajib (niat dan meratakan air ke seluruh tubuh)',
          'Menjelaskan sunnah-sunnah sebelum dan saat mandi junub sesuai hadis Aisyah r.a.'
        ],
        defaultWilf: [
          'Saya dapat membedakan sebab hadas besar antara laki-laki dan perempuan.',
          'Saya dapat mengurutkan tata cara mandi wajib Rasulullah ﷺ secara berurutan.',
          'Saya dapat menjelaskan pentingnya meratakan air hingga ke pangkal rambut dan lipatan kulit.'
        ],
        defaultSlo: [
          'Peserta didik memiliki kematangan fikih thaharah baligh dan mampu bersuci dari hadas besar secara sah dan benar.'
        ],
        clilTerms: [
          { term: 'Ghusl Janabah', arabic: 'غُسْلُ الْجَنَابَةِ', definition: 'Mandi besar dengan mengalirkan air ke seluruh badan disertai niat untuk menghilangkan hadas besar.' },
          { term: 'Ihtilam', arabic: 'اِحْتِلَامٌ', definition: 'Keluarnya mani saat tidur (mimpi basah) sebagai tanda biologis masa akil baligh.' }
        ],
        ealVocabulary: [
          { term: 'Ritual Bath', arabic: 'غُسْلٌ', indonesian: 'Mandi Wajib / Junub', hint: 'Full body purification for major ritual impurity' }
        ],
        struggledScaffold: {
          title: 'Bagan Alur Mandi Junub Sunnah',
          strategies: ['Infografis langkah mandi wajib berdasarkan hadis riwayat Bukhari Muslim dari Ummul Mukminin Aisyah r.a.', 'Pemisahan jelas antara rukun (wajib) dan adab (sunnah).'],
          scaffoldGuidance: 'Rukun mandi hanya 2: Niat menghilangkan hadas besar dan meratakan air ke seluruh permukaan kulit dan rambut.'
        },
        ealSupport: {
          title: 'Glosarium Baligh & Thaharah',
          visualSupport: 'Tabel ringkas batasan aurat dan tanda-tanda baligh menurut fiqih Islam.',
          starterPrompts: ['Dua rukun mandi wajib adalah ...', 'Sebab mandi wajib bagi laki-laki maupun perempuan adalah ...']
        },
        extensionChallenge: {
          title: 'Fikih Remaja: Pendidikan Kesehatan Reproduksi Berbasis Syariat',
          challengeTask: 'Membuat panduan edukasi kesehatan reproduksi remaja yang memadukan perspektif ilmu kedokteran modern dengan fikih thaharah.',
          realWorldContext: 'Membimbing transisi pubertas siswa SMA secara sehat dan bermoral.'
        },
        default5E: {
          starterStimulus: 'Kisah sahabat yang bertanya dengan malu-malu kepada Rasulullah mengenai tata cara bersuci dari hadas besar.',
          engage: 'Apersepsi: Mengapa Islam sangat detail mengatur masalah kebersihan dan kesucian badan?',
          explore: 'Menelaah hadis Aisyah r.a. tentang tata cara mandi junub Rasulullah ﷺ.',
          explain: 'Penjelasan rukun mandi fardhu dan sunnah-sunnahnya seperti berwudhu terlebih dahulu.',
          elaborate: 'Tanya jawab seputar kendala bersuci: misalnya rambut yang dikepang atau adanya perban luka.',
          evaluate: 'Exit ticket: Tuliskan lafal niat mandi wajib untuk menghilangkan hadas besar.'
        }
      }
    ]
  },
  {
    id: 'y11-bab1',
    chapterNumber: 'Bab 1',
    title: 'Membiasakan Berpikir Kritis dan Semangat Mencintai IPTEK',
    yearGroup: 'Year 11',
    subtopics: [
      {
        id: 'y11-b1-st1',
        title: 'Membaca, Menghafal, dan Analisis Q.S. Ali ‘Imrān/3: 190-191 & QS. ar-Rahmān/55: 33',
        objectives: [
          {
            id: 'obj-y11-b1-1',
            text: 'Siswa/i Mampu Membaca dengan tartil, menghafalkan, mempresentasikan, dan menganalisis Q.S. Ali ‘Imrān/3: 190-191.'
          },
          {
            id: 'obj-y11-b1-2',
            text: 'Membaca dengan tartil, menghafalkan, mempresentasikan, dan menganalisis QS. ar-Rahmān/55: 33.'
          }
        ],
        defaultWalt: [
          'Membaca Q.S. Ali ‘Imrān/3: 190-191 dan Q.S. ar-Rahmān/55: 33 secara tartil',
          'Menganalisis karakteristik ulil albab yang memadukan zikir dan fikir',
          'Menjelaskan tantangan menjelajah ruang angkasa dengan bekal ilmu pengetahuan (sulthan)'
        ],
        defaultWilf: [
          'Saya dapat melafalkan Q.S. Ali \'Imran: 190-191 dengan tajwid yang sempurna.',
          'Saya dapat menjelaskan 2 sifat utama Ulil Albab berdasarkan ayat 191.',
          'Saya dapat menafsirkan kata "sulthan" dalam Q.S. ar-Rahman: 33 sebagai sains dan teknologi.'
        ],
        defaultSlo: [
          'Peserta didik mampu menumbuhkan daya nalar kritis dan kecintaan terhadap riset sains yang berlandaskan zikir kepada Allah Swt.'
        ],
        clilTerms: [
          { term: 'Ulil Albab', arabic: 'أُولُو الْأَلْبَابِ', definition: 'Orang-orang yang memiliki akal budi mendalam, senantiasa mengingat Allah dalam segala posisi dan merenungkan penciptaan alam semesta.' },
          { term: 'Sulthan', arabic: 'سُلْطَانٌ', definition: 'Kekuatan, kekuasaan, atau bukti nyata yang dalam konteks modern ditafsirkan sebagai penguasaan sains dan teknologi.' },
          { term: 'Tafakkur', arabic: 'تَفَكُّرٌ', definition: 'Perenungan mendalam terhadap ayat-ayat kauniyah (alam semesta) untuk menemukan kebesaran Sang Pencipta.' }
        ],
        ealVocabulary: [
          { term: 'Critical Thinking', arabic: 'تَفْكِيرٌ نَقْدِيٌّ', indonesian: 'Berpikir Kritis', hint: 'Analytical reflection on divine signs' },
          { term: 'Intellect / Reason', arabic: 'عَقْلٌ / لُبٌّ', indonesian: 'Akal Budi', hint: 'The intellect endowed by God' }
        ],
        struggledScaffold: {
          title: 'Matriks Zikir & Fikir Ulil Albab',
          strategies: ['Bagan komparasi zikir (hati) dan fikir (rasio): Zikir melahirkan ketenangan, fikir melahirkan inovasi IPTEK.', 'Latihan membedah kosakata ayat perkata.'],
          scaffoldGuidance: 'Fokuskan pada kata kunci: Qiyaman wa qu\'udan wa \'ala junubihim (dalam keadaan berdiri, duduk, dan berbaring).'
        },
        ealSupport: {
          title: 'Visualisasi Alam Semesta & Sains Qur\'ani',
          visualSupport: 'Gambar galaksi kosmik dengan kutipan: "Rabbana ma khalaqta hadza bathila" (Ya Tuhan kami, tidaklah Engkau ciptakan ini sia-sia).',
          starterPrompts: ['Karakteristik Ulil Albab menurut surah Ali Imran ayat 191 adalah ...', 'Kata sulthan dalam surah Ar-Rahman ayat 33 berarti ...']
        },
        extensionChallenge: {
          title: 'Proyek Riset Sains & Integrasi Islam Semesta',
          challengeTask: 'Merancang proposal riset olimpiade sains (misal astronomi, biologi seluler, atau robotika) yang dihubungkan dengan ayat kauniyah Al-Qur\'an.',
          realWorldContext: 'Mempersiapkan siswa Semesta berprestasi di ajang olimpiade sains nasional (OSN) dan internasional.'
        },
        default5E: {
          starterStimulus: 'Video rekaman teleskop James Webb menampilkan kemegahan nebula dan jutaan galaksi di alam semesta.',
          engage: 'Pertanyaan: Mengapa Al-Qur\'an menantang manusia untuk menembus penjuru langit dan bumi?',
          explore: 'Tadabbur Q.S. Ali ‘Imrān/3: 190-191 dan Q.S. ar-Rahmān/55: 33.',
          explain: 'Penjelasan konsep integrasi zikir dan fikir serta pembuktian kebenaran sains dalam Al-Qur\'an.',
          elaborate: 'Presentasi kelompok: Menelaah penemuan sains modern yang telah diisyaratkan Al-Qur\'an 14 abad lalu.',
          evaluate: 'Exit ticket: Tuliskan satu doa Ulil Albab saat merenungkan ciptaan Allah.'
        }
      },
      {
        id: 'y11-b1-st2',
        title: 'Hadis tentang Berpikir Kritis, Semangat Menuntut Ilmu, dan IPTEK',
        objectives: [
          {
            id: 'obj-y11-b1-3',
            text: 'Siswa Mampu Menjelaskan sekaligus menganalisis dan mempresentasikan Hadis tentang berpikir kiritis dan Ilmu Pengetahuan dan Teknologi.'
          },
          {
            id: 'obj-y11-b1-4',
            text: 'Siswa Membaca dengan tartil, menghafalkan, mempresentasikan, dan menganalisis Hadis tentang berpikir kritis dan ilmu pengetahuan dan teknologi.'
          }
        ],
        defaultWalt: [
          'Menganalisis hadis Nabi tentang keutamaan para penuntut ilmu dibanding ahli ibadah',
          'Menghubungkan hadis "Al-Hikmatu dhallatul mukmin" dengan sikap terbuka terhadap IPTEK',
          'Mempresentasikan peran ilmuwan muslim klasik di era keemasan Baitul Hikmah Baghdad'
        ],
        defaultWilf: [
          'Saya dapat melafalkan hadis tentang menuntut ilmu adalah kewajiban setiap muslim (Thalabul \'ilmi faridhatun).',
          'Saya dapat menjelaskan analogi ulama dibanding ahli ibadah laksana bulan purnama di antara bintang-bintang.',
          'Saya dapat menyebutkan 3 ilmuwan muslim perintis sains (Ibnu Sina, Al-Khawarizmi, Ibnu Haitsam).'
        ],
        defaultSlo: [
          'Peserta didik memiliki motivasi belajar yang tinggi, produktif berkarya, dan memanfaatkan teknologi secara etis dan bertanggung jawab.'
        ],
        clilTerms: [
          { term: 'Thalabul \'Ilmi', arabic: 'طَلَبُ الْعِلْمِ', definition: 'Pencarian dan penuntutan ilmu pengetahuan yang bernilai ibadah jihad fi sabilillah.' },
          { term: 'Al-Hikmah', arabic: 'الْحِكْمَةُ', definition: 'Kebijaksanaan, pengetahuan mendalam, dan kebenaran yang dapat diambil dari mana pun datangnya.' }
        ],
        ealVocabulary: [
          { term: 'Scientific Inquiry', arabic: 'بَحْثٌ عِلْمِيٌّ', indonesian: 'Penelitian Ilmiah', hint: 'Systematic seeking of empirical knowledge' },
          { term: 'Scholarship', arabic: 'عِلْمٌ نَافِعٌ', indonesian: 'Ilmu yang Bermanfaat', hint: 'Beneficial knowledge for humanity' }
        ],
        struggledScaffold: {
          title: 'Tabel Tokoh & Penemuan Sains Muslim',
          strategies: ['Menjodohkan nama ilmuwan muslim dengan penemuannya (Al-Khawarizmi = Aljabar & Algoritma, Ibnu Sina = Kedokteran/Avicenna).', 'Latihan membaca matan hadis.'],
          scaffoldGuidance: 'Bantu siswa melafalkan hadis riwayat Ibnu Majah dengan intonasi jelas.'
        },
        ealSupport: {
          title: 'Kartu Hadis Sains',
          visualSupport: 'Kaligrafi hadis "Man salaka thariqan yaltamisu fihi \'ilman sahhallahu lahu bihi thariqan ilal jannah".',
          starterPrompts: ['Barangsiapa menempuh jalan untuk mencari ilmu, Allah akan memudahkan baginya jalan menuju ...', 'Hikmah adalah barang hilang milik kaum mukmin, di mana pun ia menemukannya maka ia paling berhak ...']
        },
        extensionChallenge: {
          title: 'Kajian Etika Kecerdasan Buatan (AI Ethics in Islam)',
          challengeTask: 'Menyusun kode etik penggunaan Artificial Intelligence (AI) bagi pelajar muslim agar tidak melanggar kejujuran akademik dan nilai moralitas syar\'i.',
          realWorldContext: 'Merespons revolusi Generative AI di sekolah dengan integritas dan kecerdasan.'
        },
        default5E: {
          starterStimulus: 'Kisah perpustakaan Baitul Hikmah di Baghdad yang menerjemahkan ribuan literatur sains dunia.',
          engage: 'Pertanyaan: Mengapa peradaban Islam pernah menjadi mercusuar sains dunia selama 500 tahun?',
          explore: 'Menelaah hadis-hadis nabi tentang kemuliaan pena penuntut ilmu.',
          explain: 'Penjelasan urgensi ilmu nafi\' (ilmu yang bermanfaat) dan bahaya ilmu yang digunakan untuk merusak bumi.',
          elaborate: 'Diskusi panel siswa: Pemanfaatan AI untuk akselerasi dakwah dan pendidikan.',
          evaluate: 'Exit ticket: Tuliskan satu hadis tentang menuntut ilmu yang paling memotivasimu.'
        }
      }
    ]
  },
  {
    id: 'y11-bab2',
    chapterNumber: 'Bab 2',
    title: 'Bukti Beriman: Memenuhi Janji, Mensyukuri Nikmat, Memelihara Lisan, Menutupi Aib Orang Lain',
    yearGroup: 'Year 11',
    subtopics: [
      {
        id: 'y11-b2-st1',
        title: 'Menganalisis dan Membiasakan: Memenuhi Janji, Syukur Nikmat, Memelihara Lisan, dan Menutupi Aib',
        objectives: [
          {
            id: 'obj-y11-b2-1',
            text: 'Siswa Mampu Menganalisis cabang iman: memenuhi janji, mensyukuri nikmat, memelihara lisan, menutupi aib orang lain.'
          },
          {
            id: 'obj-y11-b2-2',
            text: 'Siswa Mampu Menjelaskan dan memahami serta Mempresentasikan tentang memenuhi janji, mensyukuri nikmat, memelihara lisan, menutupi aib orang lain.'
          },
          {
            id: 'obj-y11-b2-3',
            text: 'Siswa Mampu Membiasakan sikap tanggung jawab, memenuhi janji, mensyukuri nikmat, memelihara lisan, menutupi aib orang lain.'
          }
        ],
        defaultWalt: [
          'Menganalisis 4 bukti nyata keimanan dalam interaksi sosial (memenuhi janji, syukur, jaga lisan, tutup aib)',
          'Mengidentifikasi tanda orang munafik jika berjanji ia ingkar',
          'Mempresentasikan strategi menutupi aib saudara sesama muslim di era media sosial'
        ],
        defaultWilf: [
          'Saya dapat menjelaskan firman Allah dalam Q.S. al-Isra\': 34 bahwa janji pasti akan dimintai pertanggungjawaban.',
          'Saya dapat menyebutkan 3 pilar syukur nikmat (hati mengakui, lisan memuji, anggota tubuh menggunakan di jalan taat).',
          'Saya dapat merumuskan 2 langkah konkret menutupi aib teman di sekolah dan asrama.'
        ],
        defaultSlo: [
          'Peserta didik mampu menjadi pribadi berintegritas tinggi yang terpercaya, pandai bersyukur, dan menjaga kehormatan sesama.'
        ],
        clilTerms: [
          { term: 'Wafa\' bil \'Ahd', arabic: 'الْوَفَاءُ بِالْعَهْدِ', definition: 'Menepati janji dan komitmen moral secara konsisten dan bertanggung jawab.' },
          { term: 'Satrul \'Aib', arabic: 'سَتْرُ الْعَيْبِ', definition: 'Menutup dan merahasiakan cela atau aib saudara muslim agar tidak menjadi konsumsi publik.' },
          { term: 'Hifzhul Lisan', arabic: 'حِفْظُ اللِّسَانِ', definition: 'Menjaga lidah dari perkataan kotor, dusta, adu domba, dan perkataan yang tidak bermanfaat.' }
        ],
        ealVocabulary: [
          { term: 'Fulfilling Promises', arabic: 'الْوَفَاءُ بِالْعَهْدِ', indonesian: 'Menepati Janji', hint: 'Keeping one\'s word and commitments' },
          { term: 'Concealing Faults', arabic: 'سَتْرُ الْعُيُوبِ', indonesian: 'Menutupi Aib', hint: 'Protecting the dignity of others' }
        ],
        struggledScaffold: {
          title: '4 Pilar Integritas Muslim',
          strategies: ['Diagram 4 kuadran: Janji, Syukur, Lisan, Aib.', 'Analisis skenario dilema: Apa yang dilakukan jika teman bercerita rahasia pribadinya?'],
          scaffoldGuidance: 'Bantu siswa membedakan antara menutup aib pribadi dengan menyembunyikan tindak kejahatan/kriminal.'
        },
        ealSupport: {
          title: 'Matriks 4 Cabang Iman',
          visualSupport: 'Tabel ringkas berisi dalil, contoh perilaku sehari-hari, dan dampak sosialnya.',
          starterPrompts: ['Tanda-tanda orang munafik menurut hadis ada 3, salah satunya jika berjanji ia ...', 'Siapa yang menutupi aib saudaranya di dunia, Allah akan menutupi aibnya di ...']
        },
        extensionChallenge: {
          title: 'Kajian Hukum Do-xxing & Cancel Culture',
          challengeTask: 'Membuat telaah etika digital tentang fenomena cancel culture dan penyebaran data pribadi (doxxing) dari perspektif satrul \'uyub dalam Islam.',
          realWorldContext: 'Membangun iklim interaksi internet yang beradab dan menjunjung tinggi praduga tak bersalah.'
        },
        default5E: {
          starterStimulus: 'Kisah Sahabat Hudzaifah bin al-Yaman sang pemegang rahasia Rasulullah yang tidak pernah membuka aib kaum munafik.',
          engage: 'Pertanyaan: Mengapa menepati janji kecil kepada teman sama pentingnya dengan menepati kontrak kerja?',
          explore: 'Menelaah hadis "Man satara musliman satarahullahu fiddunya wal akhirah".',
          explain: 'Penjelasan integrasi keempat cabang keimanan dalam membentuk karakter muslim profesional.',
          elaborate: 'Simulasi kelompok: Menyusun kesepakatan etika bersama di kelas (Class Honor Code).',
          evaluate: 'Exit ticket: Tuliskan satu janji yang pernah kamu buat dan bagaimana rencanamu menepatinya.'
        }
      }
    ]
  },
  {
    id: 'y11-bab3',
    chapterNumber: 'Bab 3',
    title: 'Menghindari Perkelahian Pelajar, Minuman Keras, dan Narkoba',
    yearGroup: 'Year 11',
    subtopics: [
      {
        id: 'y11-b3-st1',
        title: 'Kenakalan Remaja, Perkelahian Pelajar, Hukum Khamr, dan Bahaya Narkoba',
        objectives: [
          {
            id: 'obj-y11-b3-1',
            text: 'Siswa mampu mengidentifikasi secara kritis beberapa kenakalan remaja dan penyebab perilaku tersebut.'
          },
          {
            id: 'obj-y11-b3-2',
            text: 'Siswa mengetahui apa itu "miras", hukum mengkonsumsi miras dengan dalil naqli terkail dengan hukum tersebut.'
          },
          {
            id: 'obj-y11-b3-3',
            text: 'Siswa mengetahui apa itu "narkoba", jenis-jenis narkoba, hukum mengkonsumsinya dalam islam beserta dalil naqli dan aqli terkait hukum tersebut.'
          },
          {
            id: 'obj-y11-b3-4',
            text: 'Siswa mengidentifikasi lebih dalam jenis-jenis narkoba serta dapat membedakannya.'
          }
        ],
        defaultWalt: [
          'Mengidentifikasi faktor pemicu kenakalan remaja dan tawuran pelajar',
          'Menganalisis tahapan pengharaman khamr dalam Al-Qur\'an dan dalil naqli Q.S. al-Maidah/5: 90-91',
          'Menjelaskan analogi fikih (qiyas) pengharaman narkoba dengan khamr berdasarkan \'illat iskaron (memabukkan/merusak akal)'
        ],
        defaultWilf: [
          'Saya dapat menjelaskan 4 tahapan pengharaman khamr dalam sejarah tasyri\' Islam.',
          'Saya dapat menyebutkan sabda Rasulullah: "Kullu muskirin khamrun wa kullu muskirin haram".',
          'Saya dapat mengklasifikasikan jenis narkotika (narkotika, psikotropika, zat adiktif) dan bahaya kerusakannya bagi masa depan.'
        ],
        defaultSlo: [
          'Peserta didik memiliki komitmen tanpa kompromi (zero tolerance) menolak miras, narkoba, dan tawuran pelajar.'
        ],
        clilTerms: [
          { term: 'Khamr', arabic: 'خَمْرٌ', definition: 'Segala jenis minuman atau zat yang menutupi akal pikiran dan memabukkan.' },
          { term: 'Muskir', arabic: 'مُسْكِرٌ', definition: 'Sifat zat yang memabukkan dan menghilangkan kesadaran akal sehat.' },
          { term: 'Rijs', arabic: 'رِجْسٌ', definition: 'Perbuatan keji, kotor, dan najis maknawi yang wajib dijauhi.' }
        ],
        ealVocabulary: [
          { term: 'Substance Abuse', arabic: 'إِدْمَانُ الْمُخَدِّرَاتِ', indonesian: 'Penyalahgunaan Narkoba', hint: 'Addiction to illicit narcotics' },
          { term: 'Intoxicants', arabic: 'مُسْكِرَاتٌ / خَمْرٌ', indonesian: 'Minuman Keras / Khamr', hint: 'Substances impairing mental faculties' }
        ],
        struggledScaffold: {
          title: 'Pohon Pengharaman Khamr & Narkoba',
          strategies: ['Tahapan ayat khamr: 1. Q.S. an-Nahl:67 -> 2. Q.S. al-Baqarah:219 -> 3. Q.S. an-Nisa:43 -> 4. Q.S. al-Maidah:90-91.', 'Daftar bahaya narkoba bagi susunan saraf pusat.'],
          scaffoldGuidance: 'Tunjukkan bahwa qiyas hukum narkoba sama dengan khamr karena sama-sama merusak akal (hifzhul \'aql).'
        },
        ealSupport: {
          title: 'Visual Poster Anti Narkoba',
          visualSupport: 'Infografis kerusakan organ tubuh akibat alkohol dan metamfetamin serta dalil syar\'i pengharamannya.',
          starterPrompts: ['Alasan utama diharamkannya khamr dan narkoba adalah karena merusak ...', 'Menurut surah Al-Maidah ayat 90, meminum khamr termasuk perbuatan ...']
        },
        extensionChallenge: {
          title: 'Kampanye Duta Anti Narkoba Sekolah',
          challengeTask: 'Menyusun modul peer-education untuk membentengi siswa baru dari bahaya rokok elektrik (vape), miras oplosan, dan obat-obatan terlarang.',
          realWorldContext: 'Mewujudkan lingkungan sekolah Semesta yang bersih dari narkoba (BERSINAR).'
        },
        default5E: {
          starterStimulus: 'Video testimoni mantan pecandu narkoba yang kehilangan masa depan dan penyesalan mendalam.',
          engage: 'Pertanyaan: Mengapa tawuran pelajar sering kali dipicu oleh hal-hal sepele seperti saling ejek di media sosial?',
          explore: 'Bedah dalil Q.S. al-Mā’idah/5:90-91 dan analisis metode qiyas ushul fikih untuk narkoba.',
          explain: 'Penjelasan dampak biologis, hukum pidana positif di Indonesia, dan sanksi syariat atas konsumsi khamr.',
          elaborate: 'Simulasi bermain peran: Menolak tekanan teman sebaya (peer pressure) untuk mencoba miras atau rokok.',
          evaluate: 'Exit ticket: Tuliskan satu hadis Nabi yang melaknat 10 pihak yang terlibat dalam peredaran khamr.'
        }
      }
    ]
  },
  {
    id: 'y11-bab4',
    chapterNumber: 'Bab 4',
    title: 'Menebarkan Islam dengan Santun dan Damai Melalui Dakwah, Khutbah, dan Tablig',
    yearGroup: 'Year 11',
    subtopics: [
      {
        id: 'y11-b4-st1',
        title: 'Perbedaan Dakwah, Khutbah, Tabligh, Ketentuan Syar\'i & Praktik Drama / Khutbah',
        objectives: [
          {
            id: 'obj-y11-b4-1',
            text: 'Siswa mengetahui beberapa media penyebaran islam; dakwah, khutbah dan tabligh serta membedakannya.'
          },
          {
            id: 'obj-y11-b4-2',
            text: 'Siswa mempelajari secara menyeluruh tentang dakwah.'
          },
          {
            id: 'obj-y11-b4-3',
            text: 'praktek dakwah (drama kelas).'
          },
          {
            id: 'obj-y11-b4-4',
            text: 'Siswa mempelajari secara menyeluruh tentang khutbah.'
          },
          {
            id: 'obj-y11-b4-5',
            text: 'praktek khutbah.'
          }
        ],
        defaultWalt: [
          'Membedakan definisi, syarat, dan rukun antara dakwah, khutbah Jum\'at, dan tabligh',
          'Menguasai 5 rukun khutbah Jum\'at (hamdalah, shalawat, wasiat taqwa, ayat Al-Qur\'an, doa mukminin)',
          'Mempraktikkan khutbah Jum\'at dan drama dakwah santun di depan kelas'
        ],
        defaultWilf: [
          'Saya dapat menguraikan perbedaan mendasar antara khutbah, tabligh, dan dakwah dalam tabel komparasi.',
          'Saya dapat menyusun teks khutbah singkat yang memuat kelima rukun khutbah Jum\'at.',
          'Saya dapat mendemonstrasikan penampilan khatib dengan intonasi mantap, fasih, dan adab yang baik.'
        ],
        defaultSlo: [
          'Peserta didik memiliki keterampilan public speaking islami dan mampu menyampaikan pesan dakwah yang damai dan mencerahkan.'
        ],
        clilTerms: [
          { term: 'Khutbah', arabic: 'خُطْبَةٌ', definition: 'Pidato keagamaan yang terikat oleh syarat dan rukun tertentu, khususnya dalam rangkaian ibadah shalat Jum\'at.' },
          { term: 'Tabligh', arabic: 'تَبْلِيغٌ', definition: 'Menyampaikan ajaran Islam kepada masyarakat luas secara terbuka tanpa terikat rukun formal seperti khutbah.' },
          { term: 'Wasiat Taqwa', arabic: 'الْوَصِيَّةُ بِالتَّقْوَى', definition: 'Pesan ajakan untuk senantiasa bertakwa kepada Allah yang merupakan salah satu rukun wajib khutbah.' }
        ],
        ealVocabulary: [
          { term: 'Friday Sermon', arabic: 'خُطْبَةُ الْجُمُعَةِ', indonesian: 'Khutbah Jum\'at', hint: 'Ritual address during Friday congregational prayer' },
          { term: 'Public Preaching', arabic: 'تَبْلِيغٌ', indonesian: 'Tabligh', hint: 'Disseminating Islamic teachings to masses' }
        ],
        struggledScaffold: {
          title: '5 Rukun Khutbah Jum\'at Berurutan',
          strategies: ['Template teks khutbah beranotasi: [Rukun 1: Alhamdulillah] -> [Rukun 2: Shalawat Nabi] -> [Rukun 3: Ittaqullah] -> [Rukun 4: Ayat Qur\'an] -> [Rukun 5: Doa Khutbah 2].', 'Latihan membaca rukun khutbah berbahasa Arab.'],
          scaffoldGuidance: 'Khatib harus dalam keadaan suci dari hadas dan menutup aurat seperti halnya shalat.'
        },
        ealSupport: {
          title: 'Tabel Perbandingan 3 Media Syiar',
          visualSupport: 'Tabel 3 kolom: Pembeda Khutbah, Tabligh, dan Dakwah.',
          starterPrompts: ['Khutbah Jumat memiliki rukun wajib sebanyak ... perkara.', 'Rukun khutbah harus disampaikan menggunakan bahasa ...']
        },
        extensionChallenge: {
          title: 'Khutbah Tematik Kontemporer Gen-Z',
          challengeTask: 'Menulis teks naskah khutbah Jum\'at berdurasi 10 menit bertema "Menjaga Kesehatan Mental Remaja dalam Tinjauan Fikih Islam".',
          realWorldContext: 'Kaderisasi calon khatib muda untuk shalat Jum\'at di masjid sekolah Semesta.'
        },
        default5E: {
          starterStimulus: 'Video rekaman khutbah Jum\'at di Masjidil Haram Makkah oleh Syaikh Sudais.',
          engage: 'Pertanyaan: Mengapa jamaah shalat Jum\'at dilarang berbicara meskipun hanya berkata "diamlah" saat khatib berkhutbah?',
          explore: 'Membedah teks khutbah klasik dan mengidentifikasi letak 5 rukun khutbah.',
          explain: 'Penjelasan rukun, syarat, dan sunnah khutbah Jum\'at serta etika tabligh.',
          elaborate: 'Praktik langsung (micro-teaching): Siswa putra bergiliran menjadi khatib, siswa putri menyusun drama dakwah santun.',
          evaluate: 'Exit ticket: Tuliskan 5 rukun khutbah Jum\'at secara berurutan.'
        }
      }
    ]
  },
  {
    id: 'y11-bab5',
    chapterNumber: 'Bab 5',
    title: 'Meneladani Jejak Langkah Ulama Indonesia yang Mendunia',
    yearGroup: 'Year 11',
    subtopics: [
      {
        id: 'y11-b5-st1',
        title: 'Biografi, Karya, Perjuangan, dan Keteladanan Ulama Indonesia di Kancah Global',
        objectives: [
          {
            id: 'obj-y11-b5-1',
            text: 'Siswa mampu menjelaskan perjalanan hidup, perjuangan, dan kontribusi ulama Indonesia dalam pengembangan dakwah, pendidikan, serta peradaban Islam di Nusantara dan dunia.'
          },
          {
            id: 'obj-y11-b5-2',
            text: 'Siswa mampu menganalisis nilai-nilai keteladanan para ulama Indonesia, seperti semangat menuntut ilmu, keikhlasan berdakwah, produktivitas berkarya, dan pengabdian kepada masyarakat sebagai inspirasi dalam kehidupan sehari-hari.'
          },
          {
            id: 'obj-y11-b5-3',
            text: 'Siswa mampu mengevaluasi relevansi pemikiran, karya, dan perjuangan ulama Indonesia dalam menghadapi tantangan pendidikan, dakwah, dan kehidupan masyarakat pada era modern.'
          },
          {
            id: 'obj-y11-b5-4',
            text: 'Siswa mampu menunjukkan sikap gemar belajar, berakhlak mulia, menghargai jasa ulama, serta berkomitmen mengembangkan ilmu dan memberikan manfaat bagi masyarakat sebagai implementasi keteladanan para ulama Indonesia.'
          }
        ],
        defaultWalt: [
          'Menelusuri biografi intelektual ulama besar Indonesia yang diakui dunia (Syekh Nawawi al-Bantani, Syekh Ahmad Khatib al-Minangkabawi, Syekh Mahfudz at-Tarmasi, Syekh Yusuf al-Makassari)',
          'Menganalisis karya-karya monumental (kutubut turats) ulama Indonesia yang menjadi rujukan di Timur Tengah',
          'Mengambil ibrah keteladanan: etos belajar tanpa kenal lelah, produktivitas menulis kitab, dan nasionalisme'
        ],
        defaultWilf: [
          'Saya dapat menceritakan kiprah Syekh Nawawi al-Bantani yang dijuluki Sayyidul Hijaz (Mahaguru Ulama di Hijaz/Makkah).',
          'Saya dapat menyebutkan minimal 2 judul kitab karangan ulama Indonesia yang diajarkan di Universitas Al-Azhar Kairo.',
          'Saya dapat menyimpulkan 3 nilai keteladanan ulama Indonesia untuk diterapkan dalam semangat belajar saya hari ini.'
        ],
        defaultSlo: [
          'Peserta didik bangga atas tradisi keilmuan Islam Nusantara dan terinspirasi untuk menjadi ilmuwan muslim bertaraf global.'
        ],
        clilTerms: [
          { term: 'Sayyidul Hijaz', arabic: 'سَيِّدُ عُلَمَاءِ الْحِجَازِ', definition: 'Gelar kehormatan bagi Syekh Nawawi al-Bantani atas kedalaman ilmunya sebagai imam dan pengajar di Masjidil Haram.' },
          { term: 'Kutubut Turats', arabic: 'كُتُبُ التُّرَاثِ', definition: 'Kitab-kitab klasik warisan intelektual ulama terdahulu yang memuat rujukan primer keilmuan Islam.' }
        ],
        ealVocabulary: [
          { term: 'Archipelago Scholars', arabic: 'عُلَمَاءُ نُوسَانْتَارَا', indonesian: 'Ulama Nusantara Global', hint: 'Indonesian scholars of global renown' },
          { term: 'Scholarly Heritage', arabic: 'تُرَاثٌ عِلْمِيٌّ', indonesian: 'Warisan Keilmuan', hint: 'Classical books and writings' }
        ],
        struggledScaffold: {
          title: 'Kartu Profil Ulama Dunia Asal Indonesia',
          strategies: ['Tabel komparasi 4 ulama besar: Daerah asal, Pusat keilmuan di Makkah, Kitab karangan, Murid-murid utama (seperti KH Hasyim Asy\'ari & KH Ahmad Dahlan).', 'Peta perjalanan rihlah ilmiah ke Tanah Suci.'],
          scaffoldGuidance: 'Tekankan bahwa Syekh Ahmad Khatib al-Minangkabawi adalah mufti mazhab Syafi\'i dan guru dari para pendiri ormas besar Islam di Indonesia.'
        },
        ealSupport: {
          title: 'Daftar Kitab Monumental Ulama Indonesia',
          visualSupport: 'Foto cover kitab Tafsir Marah Labid karya Syekh Nawawi dan Sullam at-Taufiq.',
          starterPrompts: ['Ulama Indonesia yang menjadi imam besar di Masjidil Haram adalah ...', 'Dua pendiri ormas Islam terbesar di Indonesia yang berguru kepada Syekh Ahmad Khatib al-Minangkabawi adalah ...']
        },
        extensionChallenge: {
          title: 'Riset Genealogi Intelektual Ulama Pesantren',
          challengeTask: 'Membuat bagan sanad keilmuan (genealogi transmisi ilmu) yang menghubungkan ulama Indonesia kontemporer dengan para ulama Hijaz dan Rasulullah ﷺ.',
          realWorldContext: 'Memahami pentingnya sanad keilmuan yang bersambung dan otoritatif dalam tradisi Islam.'
        },
        default5E: {
          starterStimulus: 'Video dokumenter makam Syekh Nawawi al-Bantani di Ma\'la Makkah yang selalu diziarahi ulama dunia.',
          engage: 'Pertanyaan: Mengapa orang Indonesia tempo dulu yang serba terbatas mampu menjadi mahaguru di pusat peradaban Islam Makkah?',
          explore: 'Menelaah biografi intelektual Syekh Nawawi al-Bantani dan Syekh Yusuf al-Makassari.',
          explain: 'Penjelasan etos belajar para ulama, metode rihlah ilmiah, dan produktivitas menulis karya ilmiah.',
          elaborate: 'Diskusi: Bagaimana siswa sekolah Semesta hari ini dapat mewarisi semangat mendunia para ulama terdahulu?',
          evaluate: 'Exit ticket: Tuliskan satu karya Syekh Nawawi al-Bantani dan bidang ilmunya.'
        }
      }
    ]
  },
  {
    id: 'y11-bab6',
    chapterNumber: 'Bab 6',
    title: 'Menguatkan Kerukunan melalui Toleransi dan Memelihara Kehidupan Manusia',
    yearGroup: 'Year 11',
    subtopics: [
      {
        id: 'y11-b6-st1',
        title: 'Kajian Q.S. Yūnus/10:40–41 dan Q.S. al-Māidah/5:32 serta Hadis Toleransi & Menjaga Hak Hidup',
        objectives: [
          {
            id: 'obj-y11-b6-1',
            text: 'Siswa mampu membaca Q.S. Yūnus/10:40–41 dan Q.S. al-Māidah/5:32 beserta hadis terkait dengan tartil sesuai kaidah tajwid.'
          },
          {
            id: 'obj-y11-b6-2',
            text: 'Siswa mampu menjelaskan makna kosa kata, terjemahan, dan kandungan Q.S. Yūnus/10:40–41, Q.S. al-Māidah/5:32, serta hadis tentang toleransi dan memelihara kehidupan manusia.'
          },
          {
            id: 'obj-y11-b6-3',
            text: 'Siswa mampu menganalisis nilai-nilai toleransi dan penghormatan terhadap kehidupan manusia berdasarkan Al-Qur’an dan Hadis dalam konteks kehidupan bermasyarakat.'
          },
          {
            id: 'obj-y11-b6-4',
            text: 'Siswa mampu mengevaluasi berbagai permasalahan atau kasus yang berkaitan dengan toleransi, kerukunan, dan penghargaan terhadap hak hidup manusia berdasarkan ajaran Islam.'
          },
          {
            id: 'obj-y11-b6-5',
            text: 'Siswa mampu menyajikan hasil analisis atau gagasan tentang penerapan nilai toleransi dan memelihara kehidupan manusia dalam kehidupan sehari-hari.'
          }
        ],
        defaultWalt: [
          'Membaca Q.S. Yūnus/10:40–41 dan Q.S. al-Mā’idah/5:32 dengan tartil',
          'Menganalisis prinsip kebebasan beragama dan batas-batas toleransi (tasamuh)',
          'Memahami bahwa membunuh satu jiwa tanpa hak seolah-olah membunuh seluruh umat manusia'
        ],
        defaultWilf: [
          'Saya dapat membaca Q.S. Yunus: 40-41 dan menjelaskan makna "Li \'amali wa lakum \'amalukum".',
          'Saya dapat menganalisis pesan Q.S. al-Ma\'idah: 32 tentang nilai kesakralan satu nyawa manusia.',
          'Saya dapat menyajikan solusi atas konflik intoleransi dalam kerangka moderasi beragama.'
        ],
        defaultSlo: [
          'Peserta didik mampu menjadi duta kerukunan dan perdamaian yang menghormati kemajemukan bangsa tanpa menggadaikan akidah.'
        ],
        clilTerms: [
          { term: 'Tasamuh', arabic: 'تَسَامُحٌ', definition: 'Sikap tenggang rasa, lapang dada, dan toleran terhadap perbedaan tanpa mengorbankan prinsip akidah Islam.' },
          { term: 'Hifzhun Nafs', arabic: 'حِفْظُ النَّفْسِ', definition: 'Prinsip perlindungan hak hidup dan kehormatan setiap manusia sebagai bagian tak terpisahkan dari syariat.' }
        ],
        ealVocabulary: [
          { term: 'Religious Tolerance', arabic: 'تَسَامُحٌ دِينِيٌّ', indonesian: 'Toleransi Beragama', hint: 'Respectful coexistence of different faiths' },
          { term: 'Sanctity of Life', arabic: 'حُرْمَةُ حَيَاةِ الْإِنْسَانِ', indonesian: 'Kesakralan Jiwa Manusia', hint: 'Sacred protection of every human life' }
        ],
        struggledScaffold: {
          title: 'Batasan Toleransi dalam Islam',
          strategies: ['Tabel pemilah: Mana toleransi yang diperbolehkan (sosial, kemanusiaan, tolong-menolong tetangga) vs toleransi terlarang (mencampuradukkan ritual ibadah dan akidah).', 'Analisis ayat Lakum dinukum wa liya din.'],
          scaffoldGuidance: 'Tegaskan prinsip: "Untukmu agamamu, dan untukkulah agamaku".'
        },
        ealSupport: {
          title: 'Infografis Piagam Madinah',
          visualSupport: 'Bagan klausul Piagam Madinah yang menjamin hak hidup dan kebebasan beribadah seluruh komunitas.',
          starterPrompts: ['Menurut Q.S. al-Maidah ayat 32, barangsiapa membunuh seorang manusia bukan karena orang itu membunuh orang lain, maka seakan-akan ia telah ...', 'Prinsip toleransi Islam dalam Q.S. Yunus ayat 41 berbunyi ...']
        },
        extensionChallenge: {
          title: 'Analisis Piagam Madinah sebagai Konstitusi Modern Pertama',
          challengeTask: 'Membuat esai komparatif antara Piagam Madinah buatan Rasulullah ﷺ dengan Universal Declaration of Human Rights (UDHR) PBB dalam aspek kerukunan beragama.',
          realWorldContext: 'Mempromosikan Islam Wasathiyah Indonesia di forum pemuda global.'
        },
        default5E: {
          starterStimulus: 'Kisah Rasulullah ﷺ yang berdiri menghormati iring-iringan jenazah seorang Yahudi yang lewat di hadapannya.',
          engage: 'Pertanyaan: Mengapa Nabi menghormati jenazah Yahudi tersebut? Jawab Nabi: "Bukankah ia juga seorang manusia?".',
          explore: 'Bedah tajwid dan tadabbur Q.S. Yūnus/10:40–41 dan Q.S. al-Mā’idah/5:32.',
          explain: 'Penjelasan prinsip kesakralan nyawa manusia, larangan main hakim sendiri, dan adab bertetangga dengan non-muslim.',
          elaborate: 'Studi kasus: Menyikapi pendirian rumah ibadah di lingkungan majemuk dengan regulasi musyawarah mufakat.',
          evaluate: 'Exit ticket: Tuliskan satu tindakan nyata menjalin toleransi sosial di lingkungan sekitarmu.'
        }
      }
    ]
  },
  {
    id: 'y11-bab7',
    chapterNumber: 'Bab 7',
    title: 'Menguatkan Iman dengan Menjaga Kehormatan, Ikhlas, Malu, dan Zuhud',
    yearGroup: 'Year 11',
    subtopics: [
      {
        id: 'y11-b7-st1',
        title: "Menjaga Kehormatan ('Iffah), Ikhlas, Rasa Malu (Haya'), dan Zuhud Modern",
        objectives: [
          {
            id: 'obj-y11-b7-1',
            text: 'Siswa dapat menguatkan nilai Kerukunan Melalui Toleransi dan Memelihara Kehidupan Manusia.'
          },
          {
            id: 'obj-y11-b7-2',
            text: 'Siswa dapat menguatkan Iman dengan Menjaga Kehormatan, Ikhlas, Malu, Zuhud.'
          }
        ],
        defaultWalt: [
          'Memahami 4 karakter luhur penguat iman (\'Iffah, Ikhlas, Al-Haya\', Zuhud)',
          'Menganalisis konsep zuhud modern: dunia di tangan, bukan di dalam hati',
          'Menanamkan rasa malu kepada Allah dalam menjaga etika pribadi'
        ],
        defaultWilf: [
          'Saya dapat menjelaskan definisi \'iffah dalam menjaga kehormatan diri dan keluarga.',
          'Saya dapat menguraikan 3 tanda keikhlasan beramal menurut para ulama.',
          'Saya dapat membedakan antara zuhud sejati dengan kemalasan atau kepasifan ekonomi.'
        ],
        defaultSlo: [
          'Peserta didik mampu menampilkan pribadi anggun, memiliki harga diri islami, ikhlas tanpa pamrih, dan tidak diperbudak oleh materi.'
        ],
        clilTerms: [
          { term: '\'Iffah', arabic: 'عِفَّةٌ', definition: 'Menjaga kesucian diri dari perkara-perkara syahwat yang diharamkan Allah.' },
          { term: 'Ikhlas', arabic: 'إِخْلَاصٌ', definition: 'Memurnikan niat beramal semata-mata mengharapkan ridha Allah Swt. tanpa menginginkan balasan makhluk.' },
          { term: 'Al-Haya\'', arabic: 'الْحَيَاءُ', definition: 'Sifat malu yang membimbing seseorang untuk menjauhi kemaksiatan dan mendorong berbuat kebajikan.' },
          { term: 'Zuhud', arabic: 'زُهْدٌ', definition: 'Keterlepasan hati dari ketergantungan pada gemerlap dunia tanpa meninggalkan peran produktif di masyarakat.' }
        ],
        ealVocabulary: [
          { term: 'Sincerity', arabic: 'إِخْلَاصٌ', indonesian: 'Ikhlas', hint: 'Purity of intention solely for God' },
          { term: 'Modesty / Shame', arabic: 'حَيَاءٌ', indonesian: 'Rasa Malu Syar\'i', hint: 'Reluctance to commit wrong deeds' }
        ],
        struggledScaffold: {
          title: '4 Pilar Kepribadian Mulia',
          strategies: ['Bagan hubungan: Ikhlas (niat batin) -> \'Iffah & Malu (benteng diri) -> Zuhud (orientasi akhirat).', 'Kisah keteladanan Khalifah Umar bin Abdul Aziz yang zuhud meski memimpin kekhalifahan kaya raya.'],
          scaffoldGuidance: 'Luruskan anggapan bahwa zuhud berarti harus miskin dan berpakaian compang-camping.'
        },
        ealSupport: {
          title: 'Infografis Zuhud Modern',
          visualSupport: 'Bagan perbandingan: Hati yang terikat dunia vs Hati yang menguasai dunia untuk bekal akhirat.',
          starterPrompts: ['Malu adalah sebagian dari ...', 'Hakikat zuhud adalah mengeluarkan cinta dunia dari ...']
        },
        extensionChallenge: {
          title: 'Kajian Perbandingan: Stoikisme vs Zuhud Islami',
          challengeTask: 'Membuat analisis komparatif filosofis antara ajaran Stoikisme (Marcus Aurelius, Seneca) dengan konsep Qana\'ah dan Zuhud dalam Islam.',
          realWorldContext: 'Membangun ketahanan mental generasi muda menghadapi krisis kecemasan masa depan.'
        },
        default5E: {
          starterStimulus: 'Kisah Sahabat Abdurrahman bin Auf yang saudagar kaya raya namun hatinya sangat dermawan dan zuhud.',
          engage: 'Pertanyaan: Apakah seorang muslim boleh menjadi miliarder yang kaya raya?',
          explore: 'Menelaah hadis "Al-Haya\'u la ya\'ti illa bi khair" (Malu itu tidak mendatangkan kecuali kebaikan semata).',
          explain: 'Penjelasan empat pilar akhlak dan cara membersihkan niat dari riya\'.',
          elaborate: 'Menyusun daftar periksa muhasabah diri tentang keikhlasan dalam belajar dan berorganisasi.',
          evaluate: 'Exit ticket: Tuliskan satu contoh tindakan \'iffah yang bisa kamu praktikkan di lingkungan pergaulan.'
        }
      }
    ]
  },
  {
    id: 'y11-bab8',
    chapterNumber: 'Bab 8',
    title: 'Adab Menggunakan Media Sosial',
    yearGroup: 'Year 11',
    subtopics: [
      {
        id: 'y11-b8-st1',
        title: 'Pengertian, Urgensi, Dasar Naqli, Bentuk Adab Medsos (Tabayun, Hindari Hoaks & Ujaran Kebencian)',
        objectives: [
          {
            id: 'obj-y11-b8-1',
            text: 'Siswa mampu menjelaskan pengertian, urgensi, dan dasar naqli tentang adab menggunakan media sosial berdasarkan Al-Qur’an dan Hadis.'
          },
          {
            id: 'obj-y11-b8-2',
            text: 'Siswa mampu menganalisis berbagai bentuk adab menggunakan media sosial, seperti tabayun, berkata baik, menghindari hoaks, ujaran kebencian, ghibah, su’udzan, dan tajassus sesuai ajaran Islam.'
          },
          {
            id: 'obj-y11-b8-3',
            text: 'Siswa mampu mengevaluasi dampak positif dan negatif penggunaan media sosial serta menentukan sikap yang sesuai dengan nilai-nilai Islam dalam kehidupan digital.'
          },
          {
            id: 'obj-y11-b8-4',
            text: 'Siswa mampu menyajikan konten, komentar, atau kampanye digital yang santun, bertanggung jawab, dan mengajak kepada kebaikan sebagai wujud penerapan adab bermedia sosial.'
          },
          {
            id: 'obj-y11-b8-5',
            text: 'Siswa mampu menerapkan sikap bijak, santun, bertanggung jawab, dan menghargai perbedaan ketika berinteraksi di media sosial maupun dalam kehidupan sehari-hari.'
          },
          {
            id: 'obj-y11-b8-6',
            text: 'Siswa mampu membiasakan perilaku bermedia sosial yang mencerminkan akhlak mulia sehingga mampu menciptakan lingkungan digital yang aman, damai, dan saling menghormati.'
          }
        ],
        defaultWalt: [
          'Memahami adab bermedia sosial berbasis nilai Islam (tabayun, qaulan sadida, menjaga privasi)',
          'Mengidentifikasi bahaya fitnah digital: hoaks, cyberbullying, tajassus (stalking aib), dan hate speech',
          'Memproduksi konten digital dakwah kreatif yang santun dan mencerahkan'
        ],
        defaultWilf: [
          'Saya dapat menjelaskan firman Allah dalam Q.S. al-Hujurat: 6 tentang kewajiban tabayun.',
          'Saya dapat membedakan antara kritik konstruktif dengan ujaran kebencian (hate speech) di kolom komentar.',
          'Saya dapat membuat satu postingan atau status media sosial yang bernilai edukatif dan mengajak pada kebaikan.'
        ],
        defaultSlo: [
          'Peserta didik menjadi warga digital (digital citizen) yang cerdas, beretika, dan aktif menebarkan konten kebaikan.'
        ],
        clilTerms: [
          { term: 'Qaulan Sadida', arabic: 'قَوْلًا سَدِيدًا', definition: 'Perkataan yang benar, lurus, jujur, dan tidak mengandung kebohongan atau manipulasi.' },
          { term: 'Tajassus', arabic: 'تَجَسُّسٌ', definition: 'Mencari-cari kesalahan, aib, atau privasi orang lain yang dilarang keras dalam Q.S. al-Hujurat: 12.' },
          { term: 'Fikih Informasi', arabic: 'فِقْهُ الْمَعْلُومَاتِ', definition: 'Panduan norma fikih dalam memproduksi, mengonsumsi, dan mendistribusikan informasi digital.' }
        ],
        ealVocabulary: [
          { term: 'Digital Ethics', arabic: 'أَخْلَاقِيَّاتٌ رَقَمِيَّةٌ', indonesian: 'Etika Digital / Adab Medsos', hint: 'Ethical conduct in the cyberspace' },
          { term: 'Fact-Checking', arabic: 'تَبَيُّنٌ / تَحَقُّقٌ', indonesian: 'Cek Fakta / Tabayun', hint: 'Verifying digital rumors' }
        ],
        struggledScaffold: {
          title: 'Filter T.H.I.N.K. Islami Sebelum Posting',
          strategies: ['T: True (Benar/bukan hoaks), H: Helpful (Bermanfaat), I: Inspiring (Menginspirasi), N: Necessary (Perlu dishare?), K: Kind (Santun/tidak menyakiti).', 'Analisis Fatwa MUI No. 24 Tahun 2017 tentang Hukum Bermuamalah Melalui Media Sosial.'],
          scaffoldGuidance: 'Latih siswa mengecek sumber rujukan sebelum membagikan ulang suatu pesan berantai di WhatsApp.'
        },
        ealSupport: {
          title: 'Infografis 6 Macam Qaulan dalam Al-Qur\'an',
          visualSupport: 'Bagan 6 gaya komunikasi Qur\'ani: Qaulan Sadida, Baligha, Ma\'rufa, Karima, Layyina, Maisura.',
          starterPrompts: ['Jika datang orang fasik membawa suatu berita, sikap seorang mukmin menurut Al-Qur\'an adalah ...', 'Hukum menyebarkan informasi yang belum jelas kebenarannya adalah ...']
        },
        extensionChallenge: {
          title: 'Kampanye Konten Positif "Kebaikan di Jarimu"',
          challengeTask: 'Membuat video edukasi pendek (TikTok/Reel) berdurasi 60 detik tentang cara cerdas mengenali akun buzzer penyebar fitnah politik dan keagamaan.',
          realWorldContext: 'Meningkatkan ketahanan digital generasi muda menghadapi perang informasi (information warfare).'
        },
        default5E: {
          starterStimulus: 'Video kasus hukum seorang remaja yang terjerat UU ITE karena membagikan video hoaks penculikan anak.',
          engage: 'Pertanyaan: Mengapa banyak orang berani menulis kata-kata kasar di media sosial yang tidak berani mereka ucapkan secara langsung?',
          explore: 'Bedah dalil Q.S. al-Hujurāt/49:6 dan Q.S. al-Ahzāb/33:70.',
          explain: 'Penjelasan fikih muamalah media sosial dan 6 prinsip komunikasi Qur\'ani.',
          elaborate: 'Praktik kelompok: Mengubah komentar kebencian di media sosial menjadi balasan yang santun dan menyejukkan.',
          evaluate: 'Exit ticket: Tuliskan satu aturan pribadi yang akan kamu terapkan dalam menggunakan medsos mulai hari ini.'
        }
      }
    ]
  },
  {
    id: 'y11-bab9',
    chapterNumber: 'Bab 9',
    title: 'Ketentuan Pernikahan dalam Islam',
    yearGroup: 'Year 11',
    subtopics: [
      {
        id: 'y11-b9-st1',
        title: 'Pengertian, Rukun, Syarat, Mahram, Hak-Kewajiban Suami Istri, Talak, dan UU Perkawinan',
        objectives: [
          {
            id: 'obj-y11-b9-1',
            text: 'Peserta didik bisa menjelaskan pengertian, dalil naqli, dan tujuan pernikahan sesuai syari\'at Islam.'
          },
          {
            id: 'obj-y11-b9-2',
            text: 'Peserta didik bisa menjelaskan hukum pernikahan dan cara memilih pasangan dalam pernikahan sesuai syari\'at Islam.'
          },
          {
            id: 'obj-y11-b9-3',
            text: 'Peserta didik bisa memahami ketentuan pernikahan; rukun dan syarat pernikahan, mahram, pernikahan yang tidak sah, hak dan kewajiban suami istri, mahar, dan resepsi pernikahan.'
          },
          {
            id: 'obj-y11-b9-4',
            text: 'Peserta didik bisa memahami ketentuan talak, iddah dan rujuk.'
          },
          {
            id: 'obj-y11-b9-5',
            text: 'Peserta didik bisa mengidentifikasi pernikahan secara undang-undang dan memahami hikmah pernikahan dalam Islam.'
          }
        ],
        defaultWalt: [
          'Memahami konsep munakahat (fikih pernikahan) dan tujuan mewujudkan keluarga sakinah, mawaddah, warahmah',
          'Mengidentifikasi 5 rukun nikah (calon pengantin pria, wanita, wali nikah, 2 saksi adil, ijab qabul)',
          'Memahami konsep mahram, talak, iddah, rujuk, dan regulasi UU Perkawinan di Indonesia'
        ],
        defaultWilf: [
          'Saya dapat menjelaskan 5 hukum pernikahan (wajib, sunnah, mubah, makruh, haram) sesuai kondisi seseorang.',
          'Saya dapat menyebutkan 5 rukun nikah dan syarat sah masing-masing rukun.',
          'Saya dapat menjelaskan kriteria memilih jodoh menurut hadis Nabi: harta, keturunan, rupa, dan agama (fazhfar bidzatid-din).'
        ],
        defaultSlo: [
          'Peserta didik memahami sakralnya ikatan pernikahan (mitsaqan ghalidha) dan memiliki bekal wawasan membangun keluarga yang sakinah di masa depan.'
        ],
        clilTerms: [
          { term: 'Mitsaqan Ghalidha', arabic: 'مِيثَاقًا غَلِيظًا', definition: 'Perjanjian yang sangat kokoh dan sakral di hadapan Allah dalam akad pernikahan.' },
          { term: 'Mahram', arabic: 'مَحْرَمٌ', definition: 'Orang-orang yang haram dinikahi untuk selamanya karena faktor nasab, persusuan, atau pernikahan (mushaharah).' },
          { term: 'Ijab Qabul', arabic: 'إِيجَابٌ وَقَبُولٌ', definition: 'Pernyataan penyerahan dari pihak wali pengantin wanita dan pernyataan penerimaan dari pihak pengantin pria.' },
          { term: 'Iddah', arabic: 'عِدَّةٌ', definition: 'Masa tunggu bagi seorang wanita pasca perceraian atau ditinggal mati suami sebelum diperbolehkan menikah kembali.' }
        ],
        ealVocabulary: [
          { term: 'Marriage Contract', arabic: 'عَقْدُ النِّكَاحِ', indonesian: 'Akad Nikah', hint: 'Sacred marriage covenant in Islam' },
          { term: 'Dower / Mahr', arabic: 'مَهْرٌ / صَدَاقٌ', indonesian: 'Mahar / Mas Kawin', hint: 'Mandatory gift from groom to bride' }
        ],
        struggledScaffold: {
          title: 'Bagan Mahram & Rukun Nikah',
          strategies: ['Diagram pohon mahram: Mahram karena nasab (ibu, anak, saudara), persusuan (ibu sepersusuan), dan perbesanan (mertua, menantu).', 'Simulasi teks lafal ijab qabul yang sah.'],
          scaffoldGuidance: 'Tekankan bahwa mahar adalah hak penuh istri dan tidak boleh diambil kembali tanpa kerelaannya.'
        },
        ealSupport: {
          title: 'Tabel Hak & Kewajiban Suami Istri',
          visualSupport: 'Bagan perbandingan hak dan kewajiban bersama serta komitmen saling melengkapi.',
          starterPrompts: ['Rukun nikah ada 5 perkara, yaitu ...', 'Empat pertimbangan memilih pasangan menurut hadis Nabi adalah harta, nasab, kecantikan, dan yang paling utama adalah ...']
        },
        extensionChallenge: {
          title: 'Kajian Pencegahan Pernikahan Usia Anak & Stunting',
          challengeTask: 'Membuat analisis sosiologis dan fikih mengenai batas usia minimal menikah menurut UU No. 16 Tahun 2019 (19 tahun) dan korelasi kesiapan fisik-mental dengan pencegahan stunting.',
          realWorldContext: 'Edukasi kesiapan pra-nikah bagi generasi muda untuk melahirkan generasi yang kuat.'
        },
        default5E: {
          starterStimulus: 'Video khidmat prosesi akad nikah dengan lafal ijab qabul dan ucapan doa "Baarakallahu laka wa baaraka \'alaika...".',
          engage: 'Pertanyaan: Mengapa Islam menyebut pernikahan sebagai penyempurna separuh agama?',
          explore: 'Bedah dalil Q.S. ar-Rūm/30:21 dan telaah rukun serta syarat sah wali nikah.',
          explain: 'Penjelasan ketentuan mahram, macam-macam talak (raj\'i dan ba\'in), serta hikmah masa iddah.',
          elaborate: 'Simulasi akad nikah di kelas (ada wali, saksi, calon pengantin, dan penghulu).',
          evaluate: 'Exit ticket: Tuliskan 3 golongan wanita yang haram dinikahi karena hubungan nasab.'
        }
      }
    ]
  },
  {
    id: 'y11-bab10',
    chapterNumber: 'Bab 10',
    title: 'Peradaban Islam pada Masa Modern',
    yearGroup: 'Year 11',
    subtopics: [
      {
        id: 'y11-b10-st1',
        title: 'Latar Belakang, Tantangan Kolonialisme, dan Tokoh Pembaharu Islam Modern',
        objectives: [
          {
            id: 'obj-y11-b10-1',
            text: 'Peserta didik mampu Menjelaskan latar belakang munculnya peradaban Islam pada masa modern serta faktor-faktor yang memengaruhi perkembangannya.'
          },
          {
            id: 'obj-y11-b10-2',
            text: 'Peserta didik mampu Menganalisis tantangan yang dihadapi umat Islam pada masa modern, termasuk kolonialisme, kemajuan ilmu pengetahuan dan teknologi, serta perubahan sosial.'
          },
          {
            id: 'obj-y11-b10-3',
            text: 'Peserta didik mampu Mengidentifikasi peran dan kontribusi para tokoh pembaharu Islam dalam membangkitkan kembali kemajuan peradaban Islam.'
          }
        ],
        defaultWalt: [
          'Memahami periodisasi sejarah peradaban Islam (Klasik, Pertengahan, dan Modern sejak 1800 M)',
          'Menganalisis faktor kemunduran peradaban Islam dan kebangkitan gerakan tajdid (pembaharuan)',
          'Mengidentifikasi pemikiran tokoh pembaharu (Jamaluddin al-Afghani, Muhammad Abduh, Muhammad Rasyid Ridha, Sir Sayyid Ahmad Khan, Muhammad Iqbal)'
        ],
        defaultWilf: [
          'Saya dapat menjelaskan dampak kolonialisme bangsa Barat terhadap dunia Islam pada abad 18-19.',
          'Saya dapat membedakan gagasan Pan-Islamisme Jamaluddin al-Afghani dan modernisasi pendidikan Muhammad Abduh.',
          'Saya dapat menyimpulkan pesan syair filosofis Muhammad Iqbal tentang kebangkitan jati diri umat (Khudi).'
        ],
        defaultSlo: [
          'Peserta didik memiliki wawasan historis kritis dan terinspirasi untuk menjadi pelopor renaissance peradaban Islam masa kini.'
        ],
        clilTerms: [
          { term: 'Tajdid', arabic: 'تَجْدِيدٌ', definition: 'Gerakan pemurnian dan pembaharuan pemikiran Islam agar senantiasa relevan dengan tuntutan zaman.' },
          { term: 'Pan-Islamisme', arabic: 'الْجَامِعَةُ الْإِسْلَامِيَّةُ', definition: 'Gerakan persatuan dan solidaritas politik seluruh umat Islam sedunia untuk melawan kolonialisme Barat.' }
        ],
        ealVocabulary: [
          { term: 'Islamic Modernism', arabic: 'حَرَكَةُ التَّجْدِيدِ', indonesian: 'Modernisme / Pembaharuan Islam', hint: 'Reform movement in contemporary Islam' },
          { term: 'Renaissance', arabic: 'نَهْضَةٌ حَضَارِيَّةٌ', indonesian: 'Kebangkitan Peradaban', hint: 'Revival of cultural and scientific heights' }
        ],
        struggledScaffold: {
          title: 'Peta Pemikiran Tokoh Pembaharu',
          strategies: ['Tabel komparasi 5 tokoh modern: Negara asal, Fokus gerakan (politik, pendidikan, filsafat), Gagasan utama, Karya monumental.', 'Garis waktu periodisasi Islam.'],
          scaffoldGuidance: 'Bantu siswa membedakan antara tajdid pemurnian akidah dengan tajdid adaptasi sains modern.'
        },
        ealSupport: {
          title: 'Garis Waktu Sejarah Peradaban Islam',
          visualSupport: 'Timeline dari era Nabi -> Khulafaur Rasyidin -> Umayyah -> Abbasiyah -> Tiga Kerajaan Besar -> Era Modern 1800 M - sekarang.',
          starterPrompts: ['Gerakan Pan-Islamisme digagas oleh tokoh bernama ...', 'Fokus pembaharuan Muhammad Abduh di Mesir terutama pada bidang ...']
        },
        extensionChallenge: {
          title: 'Kajian Fikih Peradaban (Civilizational Fiqh) Abad 21',
          challengeTask: 'Membuat telaah kritis mengenai agenda "Fiqih Peradaban" dalam merespons tatanan global PBB, demokrasi, dan perdamaian dunia.',
          realWorldContext: 'Mempersiapkan kepemimpinan intelektual santri/siswa Semesta di panggung diplomasi internasional.'
        },
        default5E: {
          starterStimulus: 'Peta wilayah jajahan kolonial di dunia Islam pada abad ke-19 dari Maroko hingga Indonesia.',
          engage: 'Pertanyaan: Mengapa umat Islam yang dahulu memimpin peradaban dunia bisa mengalami kemunduran dan tertinggal di bidang teknologi?',
          explore: 'Eksplorasi pemikiran Jamaluddin al-Afghani dan majalah Al-Manar karya Rasyid Ridha.',
          explain: 'Penjelasan faktor internal (taklid, kejumudan) dan eksternal (kolonialisme) serta respons tajdid.',
          elaborate: 'Diskusi kelompok: Kontribusi gerakan pembaharuan Islam terhadap pergerakan kemerdekaan Indonesia.',
          evaluate: 'Exit ticket: Tuliskan satu gagasan Muhammad Abduh tentang pentingnya menguasai sains bagi umat Islam.'
        }
      }
    ]
  },

  // ==========================================
  // YEAR 12 (FASE F LANJUTAN)
  // ==========================================
  {
    id: 'y12-bab1',
    chapterNumber: 'Bab 1',
    title: 'Sabar dalam Menghadapi Musibah dan Ujian (Q.S. al-Baqarah/2: 155-156)',
    yearGroup: 'Year 12',
    subtopics: [
      {
        id: 'y12-b1-st1',
        title: 'Hakikat Sabar, Macam-macam Sabar, dan Makna Istirja\' dalam Menghadapi Ujian',
        objectives: [
          {
            id: 'obj-y12-b1-1',
            text: 'Peserta didik mampu membaca dan menganalisis Q.S. al-Baqarah/2: 155-156 dan hadis tentang sabar serta menghafalkannya dengan tartil.'
          },
          {
            id: 'obj-y12-b1-2',
            text: 'Peserta didik mampu mengklasifikasikan macam-macam sabar (sabar dalam ketaatan, sabar menjauhi maksiat, sabar menerima takdir) dan menerapkannya dalam ketahanan mental.'
          }
        ],
        defaultWalt: [
          'Membaca dan menghafal Q.S. al-Baqarah/2: 155-156 beserta hukum tajwidnya',
          'Mengklasifikasikan 3 dimensi sabar menurut Imam Al-Ghazali',
          'Menanamkan resiliensi mental saat menghadapi kegagalan dan musibah hidup'
        ],
        defaultWilf: [
          'Saya dapat melafalkan kalimat istirja\' (Inna lillahi wa inna ilaihi raji\'un) dengan penuh penghayatan.',
          'Saya dapat menguraikan 3 macam sabar beserta contoh konkretnya di sekolah.',
          'Saya dapat menjelaskan 5 bentuk ujian yang disebutkan dalam Q.S. al-Baqarah: 155 (khauf, lapar, kekurangan harta, jiwa, dan buah-buahan).'
        ],
        defaultSlo: [
          'Peserta didik memiliki ketangguhan mental spiritual (resiliensi) dalam menghadapi tekanan ujian akhir sekolah dan masa depan.'
        ],
        clilTerms: [
          { term: 'Shabr', arabic: 'صَبْرٌ', definition: 'Menahan diri dari keluh kesah, menahan lisan dari mengumpat, dan menahan anggota badan dari perbuatan merusak saat tertimpa cobaan.' },
          { term: 'Istirja\'', arabic: 'اِسْتِرْجَاعٌ', definition: 'Mengucapkan Inna lillahi wa inna ilaihi raji\'un sebagai pengakuan bahwa segala sesuatu adalah milik Allah dan akan kembali kepada-Nya.' }
        ],
        ealVocabulary: [
          { term: 'Patience & Resilience', arabic: 'صَبْرٌ وَثَبَاتٌ', indonesian: 'Sabar & Ketangguhan', hint: 'Steadfast perseverance in adversity' }
        ],
        struggledScaffold: {
          title: '3 Dimensi Sabar',
          strategies: ['Bagan segitiga sabar: Sabar dalam ketaatan (shalat tepat waktu, puasa), Sabar dari maksiat (tahan godaan), Sabar saat takdir pedih (sakit, duka).', 'Latihan hafalan ayat.'],
          scaffoldGuidance: 'Jelaskan bahwa sabar adalah tindakan aktif, bukan kepasrahan yang pasif.'
        },
        ealSupport: {
          title: 'Kaligrafi Istirja\'',
          visualSupport: 'Poster ayat Q.S. al-Baqarah/2: 155-156 dengan terjemahan dan makna perkata.',
          starterPrompts: ['Bentuk-bentuk ujian dalam surah Al-Baqarah ayat 155 meliputi ...', 'Ucapan istirja\' menunjukkan bahwa kepemilikan sejati hanyalah milik ...']
        },
        extensionChallenge: {
          title: 'Kajian Psikologi Sabar: Post-Traumatic Growth',
          challengeTask: 'Membuat esai analisis mengenai korelasi konsep sabar islami dengan fenomena pertumbuhan pascatrauma (Post-Traumatic Growth) pada penyintas bencana alam.',
          realWorldContext: 'Mempersiapkan relawan kemanusiaan yang berdaya tahan psikologis tinggi.'
        },
        default5E: {
          starterStimulus: 'Kisah ketabahan Nabi Ayyub a.s. saat diuji dengan sakit menahun, kehilangan seluruh anak, dan kemiskinan namun tetap bertasbih.',
          engage: 'Pertanyaan: Mengapa Allah menguji orang yang paling dicintai-Nya (para nabi) dengan ujian yang paling berat?',
          explore: 'Tadabbur Q.S. al-Baqarah/2: 155-156 dan hadis tentang besarnya pahala sebanding dengan besarnya ujian.',
          explain: 'Penjelasan tingkatan sabar dan korelasi sabar dengan turunnya rahmat dan petunjuk Allah.',
          elaborate: 'Menyusun strategi coping mechanism islami saat menghadapi stres persiapan masuk perguruan tinggi.',
          evaluate: 'Exit ticket: Tuliskan satu bentuk sabar dalam ketaatan yang paling menantang bagimu.'
        }
      }
    ]
  },
  {
    id: 'y12-bab2',
    chapterNumber: 'Bab 2',
    title: 'Mawaris (Hukum Waris dalam Islam): Ketentuan, Rukun, Ashabah, dan Hikmah Keadilan Waris',
    yearGroup: 'Year 12',
    subtopics: [
      {
        id: 'y12-b2-st1',
        title: 'Asas Fikih Mawaris, Hak Sebelum Pembagian, Rukun Waris, Dzawil Furudh, dan Ashabah',
        objectives: [
          {
            id: 'obj-y12-b2-1',
            text: 'Peserta didik mampu memahami ketentuan hukum waris dalam Islam; rukun dan syarat waris, hal yang menggugurkan hak waris, serta kewajiban sebelum harta dibagi.'
          },
          {
            id: 'obj-y12-b2-2',
            text: 'Peserta didik mampu menganalisis bagian ahli waris dzawil furudh (1/2, 1/4, 1/8, 2/3, 1/3, 1/6) dan ashabah serta menghitung simulasi pembagian waris sederhana secara adil.'
          }
        ],
        defaultWalt: [
          'Memahami 4 kewajiban yang harus diselesaikan sebelum harta waris dibagikan (tajhiz jenazah, bayar utang, wasiat maks 1/3)',
          'Mengidentifikasi rukun waris (muwarrits, warits, mauruts) dan sebab-sebab mewarisi (nasab, nikah, wala\')',
          'Menghitung porsi dzawil furudh dan mendalami hikmah keadilan waris Islam'
        ],
        defaultWilf: [
          'Saya dapat mengurutkan 4 hak jenazah sebelum harta waris didistribusikan.',
          'Saya dapat membedakan antara ahli waris dzawil furudh dan ashabah (sisa).',
          'Saya dapat menyelesaikan perhitungan waris jika seorang suami wafat meninggalkan istri, ibu, dan anak laki-laki.'
        ],
        defaultSlo: [
          'Peserta didik memahami keadilan ilahi dalam hukum faraidh dan mampu mencegah perselisihan keluarga terkait sengketa harta waris.'
        ],
        clilTerms: [
          { term: 'Faraidh / Mawaris', arabic: 'عِلْمُ الْفَرَائِضِ', definition: 'Ilmu fikih yang mempelajari tentang pembagian harta peninggalan orang yang meninggal dunia kepada ahli waris yang berhak.' },
          { term: 'Dzawil Furudh', arabic: 'ذَوُو الْفُرُوضِ', definition: 'Ahli waris yang bagiannya telah ditentukan secara pasti oleh Al-Qur\'an (1/2, 1/4, 1/8, 2/3, 1/3, 1/6).' },
          { term: 'Ashabah', arabic: 'عَصَبَةٌ', definition: 'Ahli waris yang menerima sisa seluruh harta warisan setelah dibagikan kepada dzawil furudh.' }
        ],
        ealVocabulary: [
          { term: 'Islamic Inheritance Law', arabic: 'عِلْمُ الْمَوَارِيثِ', indonesian: 'Hukum Waris Islam / Faraidh', hint: 'Rules of succession according to Quran' },
          { term: 'Residuary Heirs', arabic: 'عَصَبَةٌ', indonesian: 'Ashabah', hint: 'Heirs who take the remaining estate' }
        ],
        struggledScaffold: {
          title: 'Kalkulator Faraidh Sederhana',
          strategies: ['Tabel bagian pasti: Suami (1/2 atau 1/4), Istri (1/4 atau 1/8), Anak perempuan tunggal (1/2).', 'Langkah 4 tahap: Hitung harta bersih -> Tentukan dzawil furudh -> Samakan penyebut (KPK / Asal Masalah) -> Berikan sisa pada ashabah.'],
          scaffoldGuidance: 'Tekankan bahwa bagian laki-laki 2x bagian perempuan (li adz-dzakari mitslu hazhzhi al-untsayain) karena laki-laki menanggung nafkah keluarga seumur hidup.'
        },
        ealSupport: {
          title: 'Bagan 4 Kewajiban Sebelum Waris Dibagi',
          visualSupport: 'Bagan alur: Total Harta -> Biaya Tajhiz Jenazah -> Bayar Utang -> Bayar Wasiat (maks 1/3) -> Sisa Bersih Dibagi Waris.',
          starterPrompts: ['Empat kewajiban yang harus ditunaikan sebelum harta waris dibagikan adalah ...', 'Ahli waris yang tidak pernah terhalang sama sekali adalah anak, orang tua, dan ...']
        },
        extensionChallenge: {
          title: 'Analisis Komparasi Waris Islam & Kompilasi Hukum Islam (KHI)',
          challengeTask: 'Membuat telaah hukum tentang kedudukan ahli waris pengganti dan wasiat wajibah bagi anak angkat menurut Kompilasi Hukum Islam di Indonesia.',
          realWorldContext: 'Mempersiapkan literasi hukum perdata Islam di pengadilan agama.'
        },
        default5E: {
          starterStimulus: 'Kisah Nabi yang menyebut ilmu faraidh sebagai ilmu pertama yang akan dicabut dari umatnya.',
          engage: 'Pertanyaan: Mengapa pembagian harta waris sering menjadi pemicu perpecahan silaturrahim keluarga?',
          explore: 'Bedah dalil Q.S. an-Nisā’/4:11-12 tentang ketetapan faraidh yang langsung dirinci oleh Allah.',
          explain: 'Penjelasan konsep dzawil furudh, ashabah binafsihi/bighairihi, dan hikmah filosofis keadilan gender dalam waris Islam.',
          elaborate: 'Praktik studi kasus perhitungan waris berkelompok dengan kalkulator faraidh.',
          evaluate: 'Exit ticket: Tuliskan bagian seorang istri jika suami yang meninggal memiliki anak.'
        }
      }
    ]
  }
];

export const PRESET_COLOR_THEMES = [
  {
    name: 'Semesta Emerald (Standar)',
    headerStart: '#064e3b',
    headerEnd: '#047857',
    sectionBar: '#0f766e',
    accentText: '#047857'
  },
  {
    name: 'Royal Islamic Teal',
    headerStart: '#134e4a',
    headerEnd: '#0d9488',
    sectionBar: '#115e59',
    accentText: '#0f766e'
  },
  {
    name: 'Classic Navy & Gold',
    headerStart: '#1e3a5f',
    headerEnd: '#1e293b',
    sectionBar: '#1e40af',
    accentText: '#1e3a8a'
  },
  {
    name: 'Midnight Slate & Sage',
    headerStart: '#0f172a',
    headerEnd: '#334155',
    sectionBar: '#475569',
    accentText: '#334155'
  }
];
