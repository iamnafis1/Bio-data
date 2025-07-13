import { useState } from "react";
import React from "react";

const AboutMe = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ur" : "en"));
  };

  return (
    <section className="my-12 px-4 max-w-4xl mx-auto text-gray-700 font-sans">
      {/* Bismillah */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
      </h2>
      {/* <h3 className="text-xl md:text-2xl text-center text-pink-600 font-semibold mb-6">
        {language === "en" ? "Nafish's Bio Data" : "نفیس کا بائیو ڈیٹا"}
      </h3> */}

      {/* Language Toggle */}
      <div className="text-center mb-6">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
        >
          {language === "en" ? "Switch to Urdu" : "انگریزی پر جائیں"}
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="w-full text-left border border-gray-200">
          <tbody>
            {/* Sections */}
            <TableSection
              titleEn="Personal Details"
              titleUr="ذاتی معلومات"
              language={language}
            />
            <TableRow
              label="Full Name"
              labelUrdu="پورا نام"
              value="Md Nafish Alam"
              valueUrdu="محمد نفیش عالم"
              language={language}
            />
            {/* <TableRow
              label="Date of Birth"
              labelUrdu="تاریخ پیدائش"
              value="05-May-1998"
              valueUrdu="۰۵ مئی ۱۹۹۸"
              language={language}
            /> */}
            <TableRow
              label="Age"
              labelUrdu="عمر"
              value="26 years"
              valueUrdu="۲۶ سال"
              language={language}
            />

            <TableRow
              label="Height"
              labelUrdu="قد"
              value="5 feet 7 inch"
              valueUrdu="5 فٹ 7 انچ"
              language={language}
            />

            <TableRow
              label="Religion"
              labelUrdu="مذہب"
              value="Islam"
              valueUrdu="اسلام"
              language={language}
            />
            <TableRow
              label="Blood Group"
              labelUrdu="بلڈ گروپ"
              value="O+"
              valueUrdu="O+"
              language={language}
            />
            <TableRow
              label="Permanent Address"
              labelUrdu="مستقل پتہ"
              value="Howrah, Shibpur, West Bengal"
              valueUrdu="ہاوڑا، شیبپور، ویسٹ بنگال"
              language={language}
            />
            <TableRow
              label="Current Address"
              labelUrdu="موجودہ پتہ"
              value="Tolichowki, Hyderabad"
              valueUrdu="ٹولی چوکی، حیدرآباد"
              language={language}
            />

            <TableSection
              titleEn="Education & Profession"
              titleUr="تعلیم اور پیشہ"
              language={language}
            />
            <TableRow
              label="Education"
              labelUrdu="تعلیم"
              value="B.Tech in Electronics and Communication (2022) from Kolkata, West Bengal"
              valueUrdu="بی ٹیک الیکٹرانکس اور کمیونیکیشن (۲۰۲۲) کولکاتا، ویسٹ بنگال سے"
              language={language}
            />

            <TableRow
              label="Occupation"
              labelUrdu="پیشہ"
              value="Software Developer"
              valueUrdu="سافٹ ویئر ڈویلپر"
              language={language}
            />
            <TableRow
              label="Company"
              labelUrdu="کمپنی"
              value="Infosys"
              valueUrdu="انفوسس"
              language={language}
            />

            <TableSection
              titleEn="Family Details"
              titleUr="خاندانی معلومات"
              language={language}
            />
            <TableRow
              label="Father’s Name"
              labelUrdu="والد کا نام"
              value="Md Kalim Akhter"
              valueUrdu="محمد کلیم اختر"
              language={language}
            />
            <TableRow
              label="Mother’s Name"
              labelUrdu="والدہ کا نام"
              value="Raushan Jahaan (late)"
              valueUrdu="راوشن جہاں (مرحوم)"
              language={language}
            />
            <TableRow
              label="Siblings"
              labelUrdu="بہن بھائی"
              value="6 brothers (all married except one younger than me), 4 sisters (all married)"
              valueUrdu="۶ بھائی (سب شادی شدہ، سوائے ایک کے جو مجھ سے چھوٹا ہے)، ۴ بہنیں (سب شادی شدہ)"
              language={language}
            />
            {/* Bride's Requirements Section - Separate Note */}
            <tr className="bg-pink-100 text-pink-700">
              <td
                colSpan="2"
                className="px-4 py-3 text-lg font-semibold text-center"
              >
                {language === "en" ? "Bride's Requirements" : "دلہن کی ضروریات"}
              </td>
            </tr>
            <tr className="border-t border-gray-200 bg-pink-50">
              <td className="px-4 py-2 font-medium text-gray-600">
                {language === "en" ? "Requirements" : "ضروریات"}
              </td>
              <td className="px-4 py-2 text-gray-800">
                {language === "en"
                  ? "Looking for a well-mannered and educated woman who abides by Islamic laws, strongly follows the Hijab (Pardah), stays away from shirk and bidah, is familiar with Islamic teachings, and practices Islam by offering prayers. She must be kind-hearted."
                  : "ایک خوش اخلاق اور تعلیم یافتہ خاتون کی تلاش ہے جو اسلامی قوانین کی پابند ہو، حجاب (پردہ) کا سختی سے اتباع کرے، شرک اور بدعت سے بچی رہے، اسلامی تعلیمات سے واقف ہو، اور نماز پڑھ کر اسلام کی پیروی کرتی ہو۔ وہ دل سے مہربان ہونی چاہیے۔"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

const TableSection = ({ titleEn, titleUr, language }) => (
  <tr className="bg-pink-50">
    <th
      colSpan="2"
      className="px-4 py-3 text-pink-700 text-lg font-semibold border border-gray-200"
    >
      {language === "en" ? titleEn : titleUr}
    </th>
  </tr>
);

const TableRow = ({ label, labelUrdu, value, valueUrdu, language }) => (
  <tr className="border-t border-gray-200">
    <td className="px-4 py-2 font-medium w-1/3 text-gray-600">
      {language === "en" ? (
        label
      ) : (
        <div dir="rtl" className="text-right text-green-700">
          {labelUrdu}
        </div>
      )}
    </td>
    <td className="px-4 py-2">
      {language === "en" ? (
        value
      ) : (
        <div dir="rtl" className="text-right text-green-800">
          {valueUrdu}
        </div>
      )}
    </td>
  </tr>
);

export default AboutMe;
