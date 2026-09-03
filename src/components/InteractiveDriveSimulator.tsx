import React, { useState } from "react";
import { 
  Folder, 
  FileText, 
  Upload, 
  ShieldCheck, 
  Lock, 
  Key, 
  Trash2, 
  HardDrive, 
  Eye, 
  CheckCircle2,
  FileCode,
  FileSpreadsheet,
  Plus
} from "lucide-react";

interface DriveFile {
  id: string;
  name: string;
  size: string;
  type: string;
  folder: string;
  tag: string;
  uploadedAt: string;
}

export const InteractiveDriveSimulator: React.FC = () => {
  const [currentFolder, setCurrentFolder] = useState<string>("root");
  const [userRole, setUserRole] = useState<"User" | "Admin">("User");
  const [activeTab, setActiveTab] = useState<"explorer" | "jwt" | "admin">("explorer");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [files, setFiles] = useState<DriveFile[]>([
    {
      id: "f1",
      name: "system_architecture_diagram.pdf",
      size: "2.4 MB",
      type: "pdf",
      folder: "root",
      tag: "Architecture",
      uploadedAt: "2 hours ago",
    },
    {
      id: "f2",
      name: "jwt_auth_controller.ts",
      size: "48 KB",
      type: "code",
      folder: "root",
      tag: "Security",
      uploadedAt: "1 day ago",
    },
    {
      id: "f3",
      name: "gemini_streaming_benchmark.json",
      size: "340 KB",
      type: "data",
      folder: "ai_models",
      tag: "AI Telemetry",
      uploadedAt: "3 days ago",
    },
    {
      id: "f4",
      name: "quarterly_sprint_roadmap.xlsx",
      size: "1.1 MB",
      type: "sheet",
      folder: "engineering",
      tag: "Planning",
      uploadedAt: "5 days ago",
    },
  ]);

  const folders = [
    { id: "root", name: "Root Directory", count: 2 },
    { id: "ai_models", name: "AI Model Checkpoints", count: 1 },
    { id: "engineering", name: "Engineering Specs", count: 1 },
  ];

  const currentFiles = files.filter((f) => f.folder === currentFolder);

  const handleSimulatedUpload = () => {
    setIsUploading(true);
    setUploadProgress(15);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          // Add new simulated file
          setFiles((existing) => [
            {
              id: "f" + (existing.length + 1),
              name: `new_spec_v${existing.length + 1}.pdf`,
              size: "1.8 MB",
              type: "pdf",
              folder: currentFolder,
              tag: "Verified Upload",
              uploadedAt: "Just now",
            },
            ...existing,
          ]);
          return 100;
        }
        return prev + 25;
      });
    }, 200);
  };

  const handleDeleteFile = (id: string) => {
    setFiles(files.filter((f) => f.id !== id));
  };

  return (
    <div className="rounded-2xl bg-[#090D14] border border-emerald-500/30 overflow-hidden shadow-2xl flex flex-col">
      {/* Top Header */}
      <div className="p-4 bg-[#0D161F] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#10B981] to-[#059669] flex items-center justify-center text-white shadow-md">
            <HardDrive className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm text-white">DRIVE Secure Sandbox</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono-code border border-emerald-500/30">
                JWT Guarded
              </span>
            </div>
            <p className="text-[10px] font-mono-code text-gray-400">
              Interactive File System & Security Inspector
            </p>
          </div>
        </div>

        {/* Action Tabs & Role Switcher */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/5 text-xs font-mono-code">
            <button
              onClick={() => setActiveTab("explorer")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeTab === "explorer" ? "bg-emerald-500 text-black font-bold" : "text-gray-400 hover:text-white"
              }`}
            >
              File Explorer
            </button>
            <button
              onClick={() => setActiveTab("jwt")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeTab === "jwt" ? "bg-emerald-500 text-black font-bold" : "text-gray-400 hover:text-white"
              }`}
            >
              JWT Inspector
            </button>
          </div>

          <button
            onClick={() => setUserRole(userRole === "User" ? "Admin" : "User")}
            className="px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-mono-code text-gray-300 flex items-center gap-1.5"
            title="Toggle user role"
          >
            <ShieldCheck className={`w-3.5 h-3.5 ${userRole === "Admin" ? "text-emerald-400" : "text-gray-400"}`} />
            <span>Role: {userRole}</span>
          </button>
        </div>
      </div>

      {/* Main Sandbox Area */}
      {activeTab === "explorer" && (
        <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Folders & Quota */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-mono-code text-gray-400">FOLDERS:</span>
              <div className="space-y-1.5">
                {folders.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setCurrentFolder(f.id)}
                    className={`w-full p-2.5 rounded-xl text-left font-mono-code text-xs flex items-center justify-between transition-all ${
                      currentFolder === f.id
                        ? "bg-emerald-500/20 border border-emerald-500/40 text-white font-bold"
                        : "bg-white/[0.03] border border-white/5 text-gray-400 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Folder className={`w-4 h-4 ${currentFolder === f.id ? "text-emerald-400" : "text-gray-400"}`} />
                      <span className="truncate">{f.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Storage Quota */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 font-mono-code text-xs">
              <div className="flex items-center justify-between text-gray-400">
                <span>STORAGE USAGE</span>
                <span className="text-emerald-400 font-bold">5.8 MB / 5 GB</span>
              </div>
              <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="w-[12%] h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
              </div>
              <p className="text-[10px] text-gray-500">
                Encrypted at rest with AES-256 metadata indexing in MongoDB.
              </p>
            </div>

            {/* Upload Action */}
            <button
              onClick={handleSimulatedUpload}
              disabled={isUploading}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-bold font-mono-code text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              <Upload className={`w-3.5 h-3.5 ${isUploading ? "animate-bounce" : ""}`} />
              <span>{isUploading ? `Uploading (${uploadProgress}%)...` : "Simulate File Upload"}</span>
            </button>
          </div>

          {/* Right Column: Files List & Operations */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono-code text-gray-400">
              <span>FILES IN CURRENT DIRECTORY ({currentFiles.length})</span>
              <span className="text-emerald-400">REST API: GET /api/files</span>
            </div>

            <div className="space-y-2">
              {currentFiles.length === 0 ? (
                <div className="p-8 text-center rounded-xl bg-white/[0.02] border border-dashed border-white/10 text-gray-400 font-mono-code text-xs">
                  No files in this directory. Click "Simulate File Upload" to add one.
                </div>
              ) : (
                currentFiles.map((file) => (
                  <div
                    key={file.id}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-all flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                        {file.type === "code" ? (
                          <FileCode className="w-4 h-4" />
                        ) : file.type === "sheet" ? (
                          <FileSpreadsheet className="w-4 h-4" />
                        ) : (
                          <FileText className="w-4 h-4" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-mono-code text-xs text-white font-bold truncate">
                          {file.name}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] font-mono-code text-gray-400">
                          <span>{file.size}</span>
                          <span>•</span>
                          <span className="px-1 py-0.2 rounded bg-white/5 text-gray-300">
                            {file.tag}
                          </span>
                          <span>•</span>
                          <span>{file.uploadedAt}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleDeleteFile(file.id)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-500/20 text-gray-400 hover:text-rose-400 transition-all"
                        title="Delete File (Cascade Check)"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* JWT Inspector Tab */}
      {activeTab === "jwt" && (
        <div className="p-4 sm:p-6 space-y-4 font-mono-code text-xs">
          <div className="p-3.5 rounded-xl bg-[#060A0E] border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-gray-400 text-[11px]">
              <span className="text-emerald-400 font-bold">SESSION JWT AUTHORIZATION HEADER:</span>
              <span>SIGNED WITH SHA-256</span>
            </div>
            <p className="text-[10px] text-gray-400 break-all p-2 rounded bg-black/40 border border-white/5">
              Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWI4OWUyYTIxMGEiLCJyb2xlIjoi{userRole.toLowerCase()}
              IiwiaWF0IjoxNzE2ODQwMDAwLCJleHAiOjE3MTY4NzYwMDB9.signature_verified_ok
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
              <span className="text-emerald-400 font-bold text-[11px]">DECODED PAYLOAD:</span>
              <pre className="text-[11px] text-gray-300">
{`{
  "userId": "65b89e2a210a",
  "role": "${userRole.toLowerCase()}",
  "permissions": ["READ_FILE", "WRITE_FILE", "DELETE_OWN"],
  "exp": 1716876000
}`}
              </pre>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
              <span className="text-emerald-400 font-bold text-[11px]">SECURITY POLICIES ENFORCED:</span>
              <ul className="space-y-1.5 text-[11px] text-gray-400">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Stored in httpOnly, SameSite=Strict cookies</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Automatic token invalidation upon logout</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Role-based guard on admin endpoints</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
