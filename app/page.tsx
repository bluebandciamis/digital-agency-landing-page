export default function RootPage() {
  const actionCards = [
    { title: 'Detail Misi', icon: '🔎', bg: '#d8c6ed' },
    { title: 'Buku Harian', icon: '📒', bg: '#8ec9d7' },
    { title: 'Tantangan Jenis', icon: '💡', bg: '#f4c1d6' },
  ]

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #efe7cf 0%, #f5f0e3 100%)',
        padding: '24px',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          background: '#f6eedc',
          borderRadius: '32px',
          border: '3px solid #1a1a1a',
          boxShadow: '0 10px 0 #1a1a1a',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            background: '#f4c133',
            padding: '14px 18px 10px',
            borderBottom: '3px solid #1a1a1a',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: '#1a1a1a',
            }}
          >
            <span>9:18</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem' }}>
              <span>📶</span>
              <span>📵</span>
              <span>🔋</span>
            </div>
          </div>
        </div>

        <div
          style={{
            background: '#f6eedc',
            padding: '18px 18px 8px',
            borderBottom: '1px solid rgba(26,26,26,0.2)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              paddingBottom: '12px',
            }}
          >
            <div
              style={{
                width: '62px',
                height: '62px',
                borderRadius: '50%',
                background: '#d4e4af',
                border: '3px solid #1a1a1a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
              }}
            >
              🐸
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: 900,
                  fontSize: '1.05rem',
                  color: '#1a1a1a',
                }}
              >
                Selamat Datang Kevin!
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: '8px',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 10px',
                    borderRadius: '999px',
                    background: '#ecf3e5',
                    border: '2px solid #1a1a1a',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                  }}
                >
                  <span>🔔</span>
                  <span>0</span>
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 10px',
                    borderRadius: '999px',
                    background: '#d9e8c6',
                    border: '2px solid #1a1a1a',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                  }}
                >
                  <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: '#3f8a57' }} />
                  Aktif
                </div>
              </div>
            </div>

            <div
              style={{
                minWidth: '58px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: '#f0b42a',
                  border: '3px solid #1a1a1a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                }}
              >
                🪙
              </div>
              <div
                style={{
                  fontWeight: 900,
                  fontSize: '0.68rem',
                  letterSpacing: '0.06em',
                  color: '#1a1a1a',
                  textTransform: 'uppercase',
                }}
              >
                Level 0
              </div>
            </div>
          </div>

          <div
            style={{
              height: '10px',
              background: '#d7d7d7',
              borderRadius: '999px',
              border: '2px solid #1a1a1a',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '0%',
                height: '100%',
                background: '#3f8a57',
              }}
            />
          </div>

          <div
            style={{
              textAlign: 'right',
              fontWeight: 800,
              color: '#1a1a1a',
              fontSize: '0.78rem',
              marginTop: '6px',
            }}
          >
            0/500 XP
          </div>
        </div>

        <div style={{ padding: '16px 18px 0' }}>
          <h2
            style={{
              margin: 0,
              marginBottom: '14px',
              fontWeight: 900,
              fontSize: '1.05rem',
              color: '#1a1a1a',
            }}
          >
            Misi Gobi
          </h2>

          <div
            style={{
              background: '#d8e9d8',
              border: '3px solid #1a1a1a',
              borderRadius: '22px',
              padding: '16px',
              boxShadow: '0 5px 0 #1a1a1a',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '10px',
              }}
            >
              <div style={{ fontWeight: 900, color: '#1a1a1a', fontSize: '0.95rem' }}>
                Misi yang belum terselesaikan :
              </div>
              <div
                style={{
                  background: '#f3efe0',
                  border: '2px solid #1a1a1a',
                  borderRadius: '10px',
                  padding: '4px 8px',
                  fontWeight: 900,
                  fontSize: '0.8rem',
                }}
              >
                0/5
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                marginTop: '12px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800 }}>
                  <span>•</span>
                  <span>Membuang sampah</span>
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    gap: '8px',
                    alignItems: 'center',
                    background: '#f0e7d6',
                    border: '2px solid #1a1a1a',
                    borderRadius: '12px',
                    padding: '4px 8px',
                    width: 'fit-content',
                    fontWeight: 800,
                    fontSize: '0.72rem',
                  }}
                >
                  <span>🗑️</span>
                  <span>0/5</span>
                </div>
              </div>

              <div
                style={{
                  width: '110px',
                  height: '92px',
                  borderRadius: '18px',
                  border: '3px solid #1a1a1a',
                  background: '#f9f5ea',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '72px',
                    height: '56px',
                    borderRadius: '18px 18px 22px 22px',
                    border: '3px solid #1a1a1a',
                    background: '#f2efe9',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: '-12px',
                      width: '54px',
                      height: '14px',
                      borderRadius: '12px 12px 0 0',
                      border: '3px solid #1a1a1a',
                      background: '#4e8268',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: '10px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#f2d7c8',
                      border: '3px solid #1a1a1a',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: '50%',
                      width: '22px',
                      height: '10px',
                      borderRadius: '999px',
                      background: '#de8c69',
                      border: '3px solid #1a1a1a',
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '14px',
                background: '#d3d8a8',
                border: '2px solid #1a1a1a',
                borderRadius: '14px',
                padding: '10px 12px',
                minHeight: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.82rem',
              }}
            >
              Kumpulkan sampahmu disini, Sobat Gobi!
            </div>
          </div>
        </div>

        <div style={{ padding: '16px 18px 0' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '14px',
            }}
          >
            {actionCards.map((card) => (
              <div
                key={card.title}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    maxWidth: '110px',
                    aspectRatio: '1',
                    borderRadius: '24px',
                    background: card.bg,
                    border: '3px solid #1a1a1a',
                    boxShadow: '0 4px 0 #1a1a1a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                  }}
                >
                  {card.icon}
                </div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    color: '#1a1a1a',
                  }}
                >
                  {card.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '18px' }}>
          <div
            style={{
              background: '#d7eae5',
              border: '3px solid #1a1a1a',
              borderRadius: '28px',
              boxShadow: '0 5px 0 #1a1a1a',
              padding: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '118px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, #8ec0b7 0%, #b8d9d0 100%)',
                border: '3px solid #1a1a1a',
                marginBottom: '12px',
                fontSize: '3rem',
              }}
            >
              🧴
            </div>
            <div
              style={{
                background: '#1a1a1a',
                color: '#f6eedc',
                borderRadius: '12px',
                padding: '6px 10px',
                width: 'fit-content',
                fontWeight: 800,
                fontSize: '0.72rem',
                marginBottom: '8px',
              }}
            >
              Plastik
            </div>

            <h3
              style={{
                margin: '0 0 8px',
                fontSize: '1.2rem',
                lineHeight: 1.2,
                color: '#1a1a1a',
                fontWeight: 900,
              }}
            >
              Keajaiban Daur Ulang!
            </h3>

            <p
              style={{
                margin: 0,
                color: '#1a1a1a',
                fontSize: '0.85rem',
                lineHeight: 1.5,
              }}
            >
              Pernahkah kamu membayangkan punya tongkat ajaib yang bisa menyulap semua
              tumpukan sampah plastik jadi barang baru seperti? ✨
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '12px',
              }}
            >
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#1a1a1a',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#c4c4c4',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#c4c4c4',
                  display: 'inline-block',
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            background: '#f6eedc',
            borderTop: '3px solid #1a1a1a',
            padding: '14px 16px 18px',
            gap: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              textAlign: 'center',
              fontWeight: 800,
              fontSize: '0.76rem',
              color: '#1a1a1a',
            }}
          >
            <div style={{ fontSize: '1.5rem' }}>🏠</div>
            <span>Beranda</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              textAlign: 'center',
              fontWeight: 800,
              fontSize: '0.76rem',
              color: '#1a1a1a',
            }}
          >
            <div style={{ fontSize: '1.5rem' }}>📚</div>
            <span>Riwayat</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              textAlign: 'center',
              fontWeight: 800,
              fontSize: '0.76rem',
              color: '#1a1a1a',
            }}
          >
            <div style={{ fontSize: '1.5rem' }}>🧑‍🤝‍🧑</div>
            <span>Profile</span>
          </div>
        </div>
      </div>
    </main>
  )
}
