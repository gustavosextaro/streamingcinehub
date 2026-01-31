"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
dotenv.config({ path: '.env.local' });
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
var firebaseConfig = {
    projectId: "studio-1424581667-39f18",
    appId: "1:183217664315:web:ae8d600409713ad7cc871e",
    apiKey: "AIzaSyClQXWX6roCR6yNzL55UvjL22nJ3yXMejk",
    authDomain: "studio-1424581667-39f18.firebaseapp.com",
    measurementId: "",
    messagingSenderId: "183217664315"
};
var app = (0, app_1.initializeApp)(firebaseConfig);
var firestore = (0, firestore_1.getFirestore)(app);
var TMDB_API_KEY = process.env.TMDB_API_KEY;
var REQUEST_DELAY = 350;
// Read URLs from file
var urlsFilePath = path.join(__dirname, 'movie-urls-to-import.txt');
var MOVIE_LINKS = fs.readFileSync(urlsFilePath, 'utf-8')
    .split('\n')
    .map(function (line) { return line.trim(); })
    .filter(Boolean);
console.log("\uD83D\uDCC2 Loaded ".concat(MOVIE_LINKS.length, " URLs from file"));
function sleep(ms) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
        });
    });
}
function resolveLetterboxdUrl(url) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url, { method: 'HEAD', redirect: 'follow' })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.url];
            }
        });
    });
}
function scrapeTmdbId(url) {
    return __awaiter(this, void 0, void 0, function () {
        var res, html, match, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.text()];
                case 2:
                    html = _a.sent();
                    match = html.match(/data-tmdb-id="(\d+)"/);
                    if (match) {
                        return [2 /*return*/, parseInt(match[1], 10)];
                    }
                    return [2 /*return*/, null];
                case 3:
                    e_1 = _a.sent();
                    console.error("Error scraping ".concat(url, ":"), e_1);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function fetchTmdbMovieData(tmdbId, lang) {
    return __awaiter(this, void 0, void 0, function () {
        var url, res, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://api.themoviedb.org/3/movie/".concat(tmdbId, "?api_key=").concat(TMDB_API_KEY, "&language=").concat(lang);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(url)];
                case 2:
                    res = _a.sent();
                    if (!res.ok)
                        return [2 /*return*/, null];
                    return [4 /*yield*/, res.json()];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    e_2 = _a.sent();
                    return [2 /*return*/, null];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function processMovie(letterboxdUrl, index) {
    return __awaiter(this, void 0, void 0, function () {
        var fullUrl, tmdbId, movieRef, movieSnap, enData, ptData, movieData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("\nProcessing: ".concat(letterboxdUrl));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 11, , 12]);
                    return [4 /*yield*/, resolveLetterboxdUrl(letterboxdUrl)];
                case 2:
                    fullUrl = _a.sent();
                    console.log("Full URL: ".concat(fullUrl));
                    return [4 /*yield*/, sleep(REQUEST_DELAY)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, scrapeTmdbId(fullUrl)];
                case 4:
                    tmdbId = _a.sent();
                    if (!tmdbId) {
                        console.log("\u274C No TMDB ID found");
                        return [2 /*return*/, { success: false, reason: 'no_tmdb_id' }];
                    }
                    console.log("TMDB ID: ".concat(tmdbId));
                    movieRef = (0, firestore_1.doc)(firestore, 'movies', tmdbId.toString());
                    return [4 /*yield*/, (0, firestore_1.getDoc)(movieRef)];
                case 5:
                    movieSnap = _a.sent();
                    if (movieSnap.exists()) {
                        console.log("\u23ED\uFE0F  ".concat(movieSnap.data().title, " already exists. Skipping."));
                        return [2 /*return*/, { success: false, reason: 'already_exists' }];
                    }
                    return [4 /*yield*/, sleep(REQUEST_DELAY)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, fetchTmdbMovieData(tmdbId, 'en-US')];
                case 7:
                    enData = _a.sent();
                    return [4 /*yield*/, sleep(REQUEST_DELAY)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, fetchTmdbMovieData(tmdbId, 'pt-BR')];
                case 9:
                    ptData = _a.sent();
                    if (!enData) {
                        console.log("\u274C Failed to fetch TMDB data");
                        return [2 /*return*/, { success: false, reason: 'tmdb_fetch_failed' }];
                    }
                    movieData = {
                        id: tmdbId.toString(),
                        title: (ptData === null || ptData === void 0 ? void 0 : ptData.title) || enData.title,
                        original_title: enData.original_title,
                        overview: (ptData === null || ptData === void 0 ? void 0 : ptData.overview) || enData.overview || '',
                        poster_path: enData.poster_path ? "https://image.tmdb.org/t/p/w500".concat(enData.poster_path) : '',
                        backdrop_path: enData.backdrop_path ? "https://image.tmdb.org/t/p/original".concat(enData.backdrop_path) : '',
                        release_date: enData.release_date || '',
                        runtime: enData.runtime || 0,
                        vote_average: enData.vote_average || 0,
                        genres: enData.genres || [],
                        genre_ids: (enData.genres || []).map(function (g) { return g.id; }),
                        createdAt: (0, firestore_1.serverTimestamp)(),
                    };
                    // Save to Firestore
                    return [4 /*yield*/, (0, firestore_1.setDoc)(movieRef, movieData)];
                case 10:
                    // Save to Firestore
                    _a.sent();
                    console.log("\u2705 Done! ".concat(movieData.title, " (ID: ").concat(tmdbId, ")"));
                    return [2 /*return*/, { success: true, title: movieData.title }];
                case 11:
                    error_1 = _a.sent();
                    console.error("\u274C Error:", error_1.message);
                    return [2 /*return*/, { success: false, reason: 'error', error: error_1.message }];
                case 12: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var processed, added, skipped, errors, i, url, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("\n\uD83C\uDFAC Starting bulk import of ".concat(MOVIE_LINKS.length, " movies...\n"));
                    console.log("=".repeat(80));
                    processed = 0;
                    added = 0;
                    skipped = 0;
                    errors = 0;
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < MOVIE_LINKS.length)) return [3 /*break*/, 5];
                    url = MOVIE_LINKS[i];
                    console.log("\n[".concat(i + 1, "/").concat(MOVIE_LINKS.length, "]"));
                    return [4 /*yield*/, processMovie(url, i)];
                case 2:
                    result = _a.sent();
                    processed++;
                    if (result.success) {
                        added++;
                    }
                    else if (result.reason === 'already_exists') {
                        skipped++;
                    }
                    else {
                        errors++;
                    }
                    // Progress update every 50 movies
                    if ((i + 1) % 50 === 0) {
                        console.log("\n".concat('='.repeat(80)));
                        console.log("\uD83D\uDCCA Progress: ".concat(processed, "/").concat(MOVIE_LINKS.length, " | \u2705 Added: ").concat(added, " | \u23ED\uFE0F  Skipped: ").concat(skipped, " | \u274C Errors: ").concat(errors));
                        console.log("".concat('='.repeat(80)));
                    }
                    return [4 /*yield*/, sleep(REQUEST_DELAY)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5:
                    console.log("\n".concat('='.repeat(80)));
                    console.log("\n\uD83C\uDF89 Bulk import completed!");
                    console.log("\uD83D\uDCCA Final Stats:");
                    console.log("   Total processed: ".concat(processed));
                    console.log("   \u2705 Added: ".concat(added));
                    console.log("   \u23ED\uFE0F  Skipped (already exist): ".concat(skipped));
                    console.log("   \u274C Errors: ".concat(errors));
                    console.log("\n".concat('='.repeat(80), "\n"));
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(console.error);
