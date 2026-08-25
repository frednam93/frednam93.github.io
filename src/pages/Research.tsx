// Research.tsx - Dark Theme Matching with Real Data
import React from "react";
import { Link } from "react-router-dom";

export default function Research() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto bg-gray-900 text-gray-100 min-h-screen">
      <h2 className="text-4xl font-extrabold tracking-tight mb-8 text-center text-indigo-300 uppercase">Publications</h2>
      <div className="space-y-4">
        {[
          {
            title: "Learning from Audio-Dependency Errors: Data Curation Strategies Based on Model Confusion Patterns in Audio Question Answering",
            author: "H. Nam",
            venue: "DCASE 2026 Challenge, 2026",
            link: "https://arxiv.org/abs/2606.22276"
          },
          {
            title: "Multi-output classification using a cross-talk architecture for compound fault diagnosis of motors in partially labeled condition",
            author: "W. Yi, W. Jung, H. Nam, K. Jang, and Y.-H. Park",
            venue: "Mechanical Systems and Signal Processing 244, 113786, 2026",
            link: "https://doi.org/10.1016/j.ymssp.2025.113786"
          },
          {
            title: "DNN-Based HRIRs Identification With a Continuously Rotating Speaker Array",
            author: "B. Y. Ko, D. Min, H. Nam, and Y.-H. Park",
            venue: "IEEE Transactions on Instrumentation and Measurement, 2025",
            link: "https://doi.org/10.1109/TIM.2025.3644532"
          },
          {
            title: "Towards Understanding of Frequency Dependence on Sound Event Detection",
            author: "H. Nam, S. H. Kim, D. Min, B. Y. Ko, and Y.-H. Park",
            venue: "IEEE/ACM TASLP 33, 3948-3960, 2025",
            link: "https://doi.org/10.1109/TASLPRO.2025.3603891"
          },
          {
            title: "Auditory Intelligence: Understanding the World Through Sound",
            author: "H. Nam",
            venue: "arXiv preprint arXiv:2508.07829, 2025",
            link: "https://arxiv.org/abs/2508.07829"
          },
          {
            title: "Binaural Sound Event Localization and Detection based on HRTF Cues for Humanoid Robots",
            author: "G. T. Lee, H. Nam, and Y.-H. Park",
            venue: "arXiv preprint arXiv:2507.20530, 2025",
            link: "https://arxiv.org/abs/2507.20530"
          },
          {
            title: "Frequency Dynamic Convolutions for Sound Event Detection",
            author: "H. Nam",
            venue: "Ph.D. dissertation, KAIST; arXiv:2506.12785, 2025",
            link: "https://arxiv.org/abs/2506.12785"
          },
          {
            title: "ResNet-Conformer for Stereo Sound Event Localization and Distance Estimation in DCASE 2025 Task 3",
            author: "J. Park, H. Nam, and Y.-H. Park",
            venue: "DCASE 2025 Challenge, Tech. Rep., 2025",
            link: "https://scholar.google.com/citations?hl=en&user=rCN5da8AAAAJ&view_op=list_works&sortby=pubdate"
          },
          {
            title: "Temporal Attention Pooling for Frequency Dynamic Convolution in Sound Event Detection",
            author: "H. Nam and Y.-H. Park",
            venue: "arXiv preprint arXiv:2504.12670, 2025",
            link: "https://arxiv.org/abs/2504.12670"
          },
          {
            title: "JiTTER: Jigsaw Temporal Transformer for Event Reconstruction for Self-Supervised Sound Event Detection",
            author: "H. Nam and Y.-H. Park",
            venue: "arXiv preprint arXiv:2502.20857, 2025",
            link: "https://arxiv.org/abs/2502.20857"
          },
          {
            title: "Coherence-based Phonemic Analysis on the Effect of Reverberation to Practical Automatic Speech Recognition",
            author: "H. Nam and Y.-H. Park",
            venue: "Applied Acoustics 227, 110233, 2025",
            link: "https://www.sciencedirect.com/science/article/pii/S0003682X24003840"
          },
          {
            title: "Few-shot bioacoustic event detection utilizing spectro-temporal receptive field",
            author: "D. Min, H. Nam, and Y.-H. Park",
            venue: "INTER-NOISE and NOISE-CON Congress and Conference Proceedings 270(10), 1694-1701, 2024",
            link: "https://doi.org/10.3397/IN_2024_3055"
          },
          {
            title: "Self Training and Ensembling Frequency Dependent Networks with Coarse Prediction Pooling and Sound Event Bounding Boxes",
            author: "H. Nam, D. Min, S. Choi, I. Choi, and Y.-H. Park",
            venue: "DCASE 2024 Workshop, 2024",
            link: "https://dcase.community/documents/workshop2024/proceedings/DCASE2024Workshop_Nam_16.pdf"
          },
          {
            title: "Pushing the Limit of Sound Event Detection with Multi-Dilated Frequency Dynamic Convolution",
            author: "H. Nam and Y.-H. Park",
            venue: "arXiv preprint arXiv:2406.13312, 2024",
            link: "https://arxiv.org/abs/2406.13312"
          },
          {
            title: "Diversifying and Expanding Frequency-Adaptive Convolution Kernels for Sound Event Detection",
            author: "H. Nam, S. H. Kim, D. Min, J. Lee, and Y.-H. Park",
            venue: "Interspeech 2024, 2024",
            link: "https://www.isca-archive.org/interspeech_2024/nam24_interspeech.pdf"
          },
          {
            title: "ChatGPT Caption Paraphrasing and FENSE-based Caption Filtering for Automated Audio Captioning",
            author: "I. Choi, H. Nam, D. Min, S.-D. Choi, and Y.-H. Park",
            venue: "DCASE 2024 Challenge, 2024",
            link: "https://dcase.community/documents/challenge2024/technical_reports/DCASE2024_Choi_38_t6.pdf"
          },
          {
            title: "Real-Time Sound Recognition System for Human Care Robot Considering Custom Sound Events",
            author: "S. H. Kim, H. Nam, S. M. Choi, and Y.-H. Park",
            venue: "IEEE Access 12, 42279-42294, 2024",
            link: "https://ieeexplore.ieee.org/document/10473039"
          },
          {
            title: "Detection of Arc Discharge through Sound Event Detection Techniques and Public Datasets",
            author: "B. Y. Ko, H. Nam, D. Min, G. T. Lee, and Y.-H. Park",
            venue: "INTER-NOISE and NOISE-CON Congress and Conference Proceedings 268(6), 2501-2506, 2023",
            link: "https://doi.org/10.3397/IN_2023_0366"
          },
          {
            title: "PRTFNet: HRTF Individualization for Accurate Spectral Cues Using a Compact PRTF",
            author: "B. Y. Ko, G. T. Lee, H. Nam, and Y.-H. Park",
            venue: "IEEE Access 11, 96119-96130, 2023",
            link: "https://ieeexplore.ieee.org/document/10229140"
          },
          {
            title: "Auditory Neural Response Inspired Sound Event Detection Based on Spectro-temporal Receptive Field",
            author: "D. Min, H. Nam, and Y.-H. Park",
            venue: "DCASE 2023 Workshop, 2023",
            link: "https://dcase.community/documents/workshop2023/proceedings/DCASE2023Workshop_Min_41.pdf"
          },
          {
            title: "Frequency and Channel Attention for Computationally Efficient Sound Event Detection",
            author: "H. Nam, S. H. Kim, D. Min, and Y.-H. Park",
            venue: "DCASE 2023 Workshop, 2023",
            link: "https://dcase.community/documents/workshop2023/proceedings/DCASE2023Workshop_Nam_32.pdf"
          },
          {
            title: "Application of Spectro-temporal Receptive Field on Soft Labeled Sound Event Detection",
            author: "D. Min, H. Nam, and Y.-H. Park",
            venue: "DCASE 2023 Challenge, 2023",
            link: "https://scholar.google.com/citations?hl=en&user=rCN5da8AAAAJ&view_op=list_works&sortby=pubdate"
          },
          {
            title: "Analysis-based Optimization of Temporal Dynamic Convolutional Neural Network for Text-independent Speaker Verification",
            author: "S. H. Kim, H. Nam, and Y.-H. Park",
            venue: "IEEE Access 11, 60646-60659, 2023",
            link: "https://ieeexplore.ieee.org/document/10151875"
          },
          {
            title: "VIFS: An End-to-End Variational Inference for Foley Sound Synthesis",
            author: "J. Lee*, H. Nam*, and Y.-H. Park",
            venue: "DCASE 2023 Challenge, 2023",
            link: "https://dcase.community/documents/challenge2023/technical_reports/DCASE2023_Lee_51_t7.pdf"
          },
          {
            title: "Deep Learning Based Cough Detection Camera Using Enhanced Features",
            author: "G. T. Lee, H. Nam, S. H. Kim, S. M. Choi, Y. Kim, and Y.-H. Park",
            venue: "Expert Systems with Applications 206, 117811, 2022",
            link: "https://www.sciencedirect.com/science/article/pii/S0957417422010740"
          },
          {
            title: "Frequency Dynamic Convolution: Frequency-Adaptive Pattern Recognition for Sound Event Detection",
            author: "H. Nam, S. H. Kim, B. Y. Ko, and Y.-H. Park",
            venue: "Interspeech 2022, 2022",
            link: "https://www.isca-speech.org/archive/pdfs/interspeech_2022/nam22_interspeech.pdf"
          },
          {
            title: "Data Augmentation and Squeeze-and-Excitation Network on Multiple Dimension for Sound Event Localization and Detection in Real Scenes",
            author: "B. Y. Ko, H. Nam, S. H. Kim, D. Min, S.-D. Choi, and Y.-H. Park",
            venue: "DCASE 2022 Challenge, 2022",
            link: "https://dcase.community/documents/challenge2022/technical_reports/DCASE2022_Ko_67_t3.pdf"
          },
          {
            title: "Frequency Dependent Sound Event Detection for DCASE 2022 Challenge Task 4",
            author: "H. Nam, S. H. Kim, D. Min, B. Y. Ko, S.-D. Choi, and Y.-H. Park",
            venue: "DCASE 2022 Challenge, 2022",
            link: "https://dcase.community/documents/challenge2022/technical_reports/DCASE2022_Nam_67_t4.pdf"
          },
          {
            title: "Temporal Dynamic Convolutional Neural Network for Text-independent Speaker Verification and Phonemic Analysis",
            author: "S. H. Kim, H. Nam, and Y.-H. Park",
            venue: "ICASSP 2022, 2022",
            link: "https://ieeexplore.ieee.org/document/9747421"
          },
          {
            title: "FilterAugment: An Acoustic Environmental Data Augmentation Method",
            author: "H. Nam, S. H. Kim, and Y.-H. Park",
            venue: "ICASSP 2022, 2022",
            link: "https://ieeexplore.ieee.org/document/9747680"
          },
          {
            title: "Decomposed Temporal Dynamic CNN: Efficient Time-adaptive Network for Text-independent Speaker Verification Explained with Speaker Activation Map",
            author: "S. H. Kim, H. Nam, and Y.-H. Park",
            venue: "arXiv preprint arXiv:2203.15277, 2022",
            link: "https://arxiv.org/abs/2203.15277"
          },
          {
            title: "Deep Learning Based Prediction of Human Auditory Brainstem Response for Sound Localization in Median Plane",
            author: "B. Y. Ko, G. T. Lee, H. Nam, and Y.-H. Park",
            venue: "Proceedings of the International Congress on Acoustics, 2022",
            link: "https://scholar.google.com/citations?hl=en&user=rCN5da8AAAAJ&view_op=list_works&sortby=pubdate"
          },
          {
            title: "Heavily Augmented Sound Event Detection Utilizing Weak Predictions",
            author: "H. Nam, B. Y. Ko, G. T. Lee, S. H. Kim, W. H. Jung, S. M. Choi, and Y.-H. Park",
            venue: "DCASE 2021 Challenge, 2021",
            link: "https://dcase.community/documents/challenge2021/technical_reports/DCASE2021_Nam_41_t4.pdf"
          }
        ].map((pub, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl p-4 hover:shadow-md transition bg-gray-800/80 backdrop-blur-sm"
          >
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-indigo-400 hover:underline"
            >
              {pub.title}
            </a>
            <p className="text-sm text-gray-400">{pub.author}</p>
            <p className="text-sm text-gray-500">{pub.venue}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center space-y-2">
        <Link
          to="/"
          className="text-sm text-indigo-400 hover:text-indigo-300 underline block"
        >
          ← Back to Home
        </Link>
        <a
          href="https://scholar.google.com/citations?hl=ko&user=rCN5da8AAAAJ&view_op=list_works&sortby=pubdate"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-300 underline block"
        >
          📚 View all publications on Google Scholar
        </a>
      </div>
    </div>
  );
}
