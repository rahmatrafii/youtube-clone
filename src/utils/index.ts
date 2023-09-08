import axios from "axios";

const BaseUrl: string = "https://youtube-v31.p.rapidapi.com";

const Options = {
  params: {
    maxResults: 10,
  },
  headers: {
    "X-RapidAPI-Key": "6cb95e0efcmsha6a2abcc93591cbp196236jsn58dbfc0ee5ec",
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

export function KonvertSubscriber(sub: string) {
  const subs = parseInt(sub);

  if (subs > 1000 && subs < 1000000) {
    const result = (subs / 1000).toFixed(1);
    if (result.split(".")[1] === "0") {
      return `${(subs / 1000).toFixed(0)}K`;
    }
    return `${result}K`;
  } else if (subs <= 1000) {
    return `${subs}`;
  } else if (subs >= 1000000) {
    const result = (subs / 1000000).toFixed(1);
    if (result.split(".")[1] === "0") {
      return `${(subs / 1000000).toFixed(0)}M`;
    }
    return `${result}M`;
  }
}
