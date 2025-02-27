import { Companies, Company } from "./company";

export interface Story {
  filename: string;
  title: string; // The title of the story - will be displayed on story list page
  date: string; // The date of the story (e.g. "1975-2025" or "1990" or "Unknown") - will be displayed on story list page
  summary: string; // A short summary of the story - will be displayed on story list page
  company: Company | undefined; // The company associated with the story - will be displayed on story list page and the comapny page
  id: string | number; // This gives the story URL: /story/${id}
  coolness: number; // 0-100, 100 is the coolest
}

export const StoryMap: Record<string, Story> = {
  "introduction.md": {
    filename: "introduction.md",
    title: "Introduction",
    date: "1975-2025", // So that it appears first on the story list page all the time
    summary: "",
    company: undefined,
    coolness: 100,
    id: 42,
  },
  "deshaw.md": {
    filename: "deshaw.md",
    title: "D. E. Shaw & Co.",
    date: "1992-1994",
    summary: "",
    company: Companies["D. E. Shaw"],
    coolness: 99,
    id: 25,
  },
  "chasebank.md": {
    filename: "chasebank.md",
    title: "Chase Manhattan Bank",
    date: "1990-1992",
    summary: "",
    company: Companies["J.P. Morgan"],
    coolness: 98,
    id: 17,
  },
  "apple.md": {
    filename: "apple.md",
    title: "Apple Computer Inc.",
    date: "1994-1996",
    summary: "",
    company: Companies.Apple,
    coolness: 97,
    id: 11,
  },
  "c2btech.md": {
    filename: "c2btech.md",
    title: "C2B Technologies Inc.",
    date: "1997-1998",
    summary: "",
    company: undefined,
    coolness: 96,
    id: 16,
  },
  "JavaSoft.md": {
    filename: "JavaSoft.md",
    title: "JavaSoft",
    date: "1997",
    summary: "",
    company: Companies["Sun Microsystems"],
    coolness: 95,
    id: 5,
  },
  "fastterm.md": {
    filename: "fastterm.md",
    title: "Fast-Term",
    date: "1984-1986",
    summary: "",
    company: undefined,
    coolness: 94,
    id: 30,
  },
  "cisco_ios.md": {
    filename: "cisco_ios.md",
    title: "Cisco",
    date: "2008",
    summary: "",
    company: Companies.Cisco,
    coolness: 93,
    id: 20,
  },
  "cyber currency 101.md": {
    filename: "cyber currency 101.md",
    title: "CBDC",
    date: "2018",
    summary: "",
    company: undefined,
    coolness: 92,
    id: 23,
  },
  "best_day.md": {
    filename: "best_day.md",
    title: "Permission TV",
    date: "2005",
    summary: "",
    company: undefined,
    coolness: 91,
    id: 14,
  },
  "Intuit.md": {
    filename: "Intuit.md",
    title: "Intuit",
    date: "2005-2007",
    summary: "",
    company: Companies["Intuit"],
    coolness: 90,
    id: 3,
  },
  "hewlettpackard.md": {
    filename: "hewlettpackard.md",
    title: "Hewlett-Packard",
    date: "1988-1990",
    summary: "",
    company: Companies["Hewlett-Packard"],
    coolness: 89,
    id: 38,
  },
  "UVA.md": {
    filename: "UVA.md",
    title: "University of Virginia School of Medicine",
    date: "1979-1986",
    summary: "",
    company: Companies["University of Virginia"],
    coolness: 88,
    id: 9,
  },
  "rpi.md": {
    filename: "rpi.md",
    title: "RPI - 'Knowledge and Thoroughness'",
    date: "1984-1988",
    summary: "",
    company: Companies["Rensselaer Polytechnic Institute"],
    coolness: 87,
    id: 55,
  },
  "USCGAux.md": {
    filename: "USCGAux.md",
    title: "U.S. Department of Homeland Security",
    date: "2010-2014",
    summary: "",
    company: Companies["U.S. Department of Homeland Security"],
    coolness: 86,
    id: 8,
  },
  "netflix_prize.md": {
    filename: "netflix_prize.md",
    title: "Netflix",
    date: "2008",
    summary: "",
    company: Companies.Netflix,
    coolness: 85,
    id: 48,
  },
  "beyondnews.md": {
    filename: "beyondnews.md",
    title: "Beyond News Inc",
    date: "1996-1997",
    summary: "",
    company: undefined,
    coolness: 84,
    id: 15,
  },
  "resultsbyiq.md": {
    filename: "resultsbyiq.md",
    title: "SGI/Cray Division",
    date: "2014",
    summary: "",
    company: Companies["Hewlett-Packard"],
    coolness: 83,
    id: 54,
  },
  "electrofiberoptic.md": {
    filename: "electrofiberoptic.md",
    title: "Electro Fiber Optic Corp",
    date: "1990",
    summary: "",
    company: undefined,
    coolness: 82,
    id: 27,
  },
  "asic1.md": {
    filename: "asic1.md",
    title: "Myarc pt.1",
    date: "1986",
    summary: "",
    company: undefined,
    coolness: 81,
    id: 12,
  },
  "asic2.md": {
    filename: "asic2.md",
    title: "Myarc pt.2",
    date: "1987",
    summary: "",
    company: undefined,
    coolness: 80,
    id: 13,
  },
  "compuserve.md": {
    filename: "compuserve.md",
    title: "Compuserve TIFORUM",
    date: "1983-1990",
    summary: "",
    company: Companies["CompuServe"],
    coolness: 79,
    id: 22,
  },
  "JavaFX.md": {
    filename: "JavaFX.md",
    title: "JavaFX",
    date: "2008",
    summary: "",
    company: Companies["Oracle Corporation"],
    coolness: 78,
    id: 4,
  },
  "valueclick.md": {
    filename: "valueclick.md",
    title: "ValueClick",
    date: "2012",
    summary: "",
    company: undefined,
    coolness: 77,
    id: 57,
  },
  "genasm.md": {
    filename: "genasm.md",
    title: "GenAsm",
    date: "1989",
    summary: "",
    company: undefined,
    coolness: 76,
    id: 32,
  },
  "genlib.md": {
    filename: "genlib.md",
    title: "GenLib",
    date: "1989",
    summary: "",
    company: undefined,
    coolness: 75,
    id: 33,
  },
  "genlink.md": {
    filename: "genlink.md",
    title: "GenLink",
    date: "1989",
    summary: "",
    company: undefined,
    coolness: 74,
    id: 34,
  },
  "genmake.md": {
    filename: "genmake.md",
    title: "GenMake",
    date: "1989",
    summary: "",
    company: undefined,
    coolness: 73,
    id: 35,
  },
  "genref.md": {
    filename: "genref.md",
    title: "GenRef",
    date: "1989",
    summary: "",
    company: undefined,
    coolness: 72,
    id: 36,
  },
  "home construction.md": {
    filename: "home construction.md",
    title: "Home Construction",
    date: "Unknown",
    summary: "",
    company: undefined,
    coolness: 71,
    id: 39,
  },
  "laser-printer.md": {
    filename: "laser-printer.md",
    title: "Home Brew Laser Printer",
    date: "1982",
    summary: "",
    company: undefined,
    coolness: 70,
    id: 44,
  },
  "magnifi.md": {
    filename: "magnifi.md",
    title: "Magnifi Inc.",
    date: "1997",
    summary: "",
    company: undefined,
    coolness: 69,
    id: 45,
  },
  "miracleofvirginia.md": {
    filename: "miracleofvirginia.md",
    title: "Miracle of Virginia",
    date: "1984",
    summary: "",
    company: undefined,
    coolness: 68,
    id: 46,
  },
  "Myarc.md": {
    filename: "Myarc.md",
    title: "Myarc Computers Inc.",
    date: "1985-1989",
    summary: "",
    company: undefined,
    coolness: 67,
    id: 6,
  },
  "national merit.md": {
    filename: "national merit.md",
    title: "National Merit Finalist",
    date: "Unknown",
    summary: "",
    company: undefined,
    coolness: 66,
    id: 47,
  },
  "PaperRoute.md": {
    filename: "PaperRoute.md",
    title: "Paper Route",
    date: "1976-1983",
    summary: "",
    company: undefined,
    coolness: 65,
    id: 7,
  },
  // The following items appear in StoryMap but not in storyRankings
  // Adding them with minimal coolness values
  "EnterNet.md": {
    filename: "EnterNet.md",
    title: "EnterNet",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 1,
  },
  "IdeaLab.md": {
    filename: "IdeaLab.md",
    title: "IdeaLab",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 2,
  },
  "acuity brands.md": {
    filename: "acuity brands.md",
    title: "Acuity Brands",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 10,
  },
  "cinnovations.md": {
    filename: "cinnovations.md",
    title: "C Innovations",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 18,
  },
  "ciq.md": {
    filename: "ciq.md",
    title: "CIQ",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 19,
  },
  "codereports.md": {
    filename: "codereports.md",
    title: "Code Reports",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 21,
  },
  "dax.md": {
    filename: "dax.md",
    title: "DAX",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 24,
  },
  "digitalinsight.md": {
    filename: "digitalinsight.md",
    title: "Digital Insight",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 26,
  },
  "element analytics.md": {
    filename: "element analytics.md",
    title: "Element Analytics",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 28,
  },
  "f5_networks.md": {
    filename: "f5_networks.md",
    title: "F5 Networks",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 29,
  },
  "forticom.md": {
    filename: "forticom.md",
    title: "FortiCom",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 31,
  },
  "gimps.md": {
    filename: "gimps.md",
    title: "GIMPS",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 37,
  },
  "independa.md": {
    filename: "independa.md",
    title: "Independa",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 40,
  },
  "intacct.md": {
    filename: "intacct.md",
    title: "Intacct",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 41,
  },
  "iot4ai.md": {
    filename: "iot4ai.md",
    title: "IoT4AI",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 43,
  },
  "neustar.md": {
    filename: "neustar.md",
    title: "Neustar",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 49,
  },
  "open source.md": {
    filename: "open source.md",
    title: "Open Source",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 50,
  },
  "permissionTV.md": {
    filename: "permissionTV.md",
    title: "Permission TV",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 51,
  },
  "recommendations_raw.md": {
    filename: "recommendations_raw.md",
    title: "Recommendations Raw",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 52,
  },
  "recommendations_summary.md": {
    filename: "recommendations_summary.md",
    title: "Recommendations Summary",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 53,
  },
  "swiftboot.md": {
    filename: "swiftboot.md",
    title: "SwiftBoot",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 56,
  },
  "wikipedia.md": {
    filename: "wikipedia.md",
    title: "Wikipedia",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 58,
  },
  "context_quotes.md": {
    filename: "context_quotes.md",
    title: "Context Quotes",
    date: "",
    summary: "",
    company: undefined,
    coolness: 1,
    id: 59,
  },
};
