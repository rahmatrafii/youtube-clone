import axios from "axios";

const BaseUrl: string = "https://youtube-v31.p.rapidapi.com";

const Options = {
  params: {
    maxResults: 10,
  },
  headers: {
    "X-RapidAPI-Key": "7e1340a8dfmshb294797e0807a12p103c7bjsnd04876a9376e",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFormApi = async (url: string) => {
  try {
    const { data } = await axios.get(`${BaseUrl}/${url}`, Options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export function KonvertDate(date: string) {
  const tanggalUploadObj: any = new Date(date);
  const hariIni: any = new Date();
  const selisihMilisekon = hariIni - tanggalUploadObj;
  const selisihHari: number = Math.floor(
    selisihMilisekon / (1000 * 60 * 60 * 24)
  );
  if (selisihHari > 31) {
    const res = Math.floor(selisihHari);
    const rataRataHariPerBulan = 30.44;
    const jumlahBulan = Math.floor(res / rataRataHariPerBulan);
    if (jumlahBulan > 12) {
      const rataRataHariPerBulan = 30.44;
      const jumlahBulan = res / rataRataHariPerBulan;
      const jumlahTahun = Math.floor(jumlahBulan / 12);
      return ` ${jumlahTahun > 1 ? `${jumlahTahun} Years` : "1 Year"} ago`;
    }
    return ` ${jumlahBulan > 1 ? `${jumlahBulan} Months` : "1 Month"} ago`;
  }

  return ` ${selisihHari > 1 ? `${selisihHari} Days` : "1 Day"} ago`;
}
