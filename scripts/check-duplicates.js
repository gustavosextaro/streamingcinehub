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
var db = (0, firestore_1.getFirestore)(app);
function checkDuplicates() {
    return __awaiter(this, void 0, void 0, function () {
        var moviesRef, snapshot, tmdbIds, docIds, duplicates, mismatchCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    moviesRef = (0, firestore_1.collection)(db, "movies");
                    return [4 /*yield*/, (0, firestore_1.getDocs)(moviesRef)];
                case 1:
                    snapshot = _a.sent();
                    console.log("\n\uD83D\uDD0D VERIFICA\u00C7\u00C3O DE DUPLICATAS");
                    console.log("".concat('='.repeat(80), "\n"));
                    console.log("Total de documentos no Firestore: ".concat(snapshot.size, "\n"));
                    tmdbIds = new Map();
                    docIds = new Set();
                    snapshot.forEach(function (doc) {
                        var data = doc.data();
                        var tmdbId = data.id;
                        var docId = doc.id;
                        docIds.add(docId);
                        if (!tmdbIds.has(tmdbId)) {
                            tmdbIds.set(tmdbId, []);
                        }
                        tmdbIds.get(tmdbId).push(docId);
                    });
                    console.log("\uD83D\uDCCA Estat\u00EDsticas:");
                    console.log("   - Documentos \u00FAnicos (doc.id): ".concat(docIds.size));
                    console.log("   - TMDB IDs \u00FAnicos: ".concat(tmdbIds.size));
                    console.log("   - Total de documentos: ".concat(snapshot.size, "\n"));
                    duplicates = Array.from(tmdbIds.entries()).filter(function (_a) {
                        var _ = _a[0], docIds = _a[1];
                        return docIds.length > 1;
                    });
                    if (duplicates.length > 0) {
                        console.log("\u274C DUPLICATAS ENCONTRADAS: ".concat(duplicates.length, "\n"));
                        duplicates.forEach(function (_a) {
                            var tmdbId = _a[0], docIds = _a[1];
                            var firstDoc = snapshot.docs.find(function (d) { return d.id === docIds[0]; });
                            var title = (firstDoc === null || firstDoc === void 0 ? void 0 : firstDoc.data().title) || 'Unknown';
                            console.log("   \uD83C\uDFAC \"".concat(title, "\" (TMDB ID: ").concat(tmdbId, ")"));
                            console.log("      Aparece ".concat(docIds.length, " vezes nos doc IDs:"));
                            docIds.forEach(function (docId) { return console.log("      - ".concat(docId)); });
                            console.log();
                        });
                    }
                    else {
                        console.log("\u2705 Nenhuma duplicata encontrada!\n");
                    }
                    mismatchCount = 0;
                    snapshot.forEach(function (doc) {
                        var data = doc.data();
                        if (doc.id !== data.id) {
                            if (mismatchCount === 0) {
                                console.log("\u26A0\uFE0F  INCOMPATIBILIDADES ENCONTRADAS (doc.id \u2260 data.id):\n");
                            }
                            mismatchCount++;
                            if (mismatchCount <= 10) {
                                console.log("   ".concat(mismatchCount, ". Doc ID: ").concat(doc.id, " | TMDB ID: ").concat(data.id, " | T\u00EDtulo: ").concat(data.title));
                            }
                        }
                    });
                    if (mismatchCount > 0) {
                        console.log("\n   Total de incompatibilidades: ".concat(mismatchCount));
                        if (mismatchCount > 10) {
                            console.log("   (mostrando apenas as primeiras 10)\n");
                        }
                    }
                    else {
                        console.log("\u2705 Todos os doc IDs correspondem aos TMDB IDs\n");
                    }
                    console.log("".concat('='.repeat(80), "\n"));
                    return [2 /*return*/];
            }
        });
    });
}
checkDuplicates().catch(console.error);
