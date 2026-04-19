/**
 * HTML+CSS 实训平台 - 交互脚本
 */

// ========================================
// 学习进度追踪系统（按天激励）
// ========================================
const ProgressTracker = {
    storageKey: 'web_learning_progress',
    
    // 获取进度数据
    getData: function() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : {
            completedExamples: [],
            studyDays: {},  // { "2026-04-02": ["ex1-1", "ex1-2"] }
            firstStudyDate: null,
            lastStudyDate: null
        };
    },
    
    // 保存进度数据
    saveData: function(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    },
    
    // 获取今天日期字符串
    getToday: function() {
        return new Date().toISOString().split('T')[0];
    },
    
    // 计算连续学习天数
    getStreakDays: function(data) {
        if (!data.lastStudyDate) return 0;
        
        const today = new Date(this.getToday());
        const lastDate = new Date(data.lastStudyDate);
        const diffDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) {
            // 今天学习了，计算连续天数
            let streak = 1;
            let checkDate = new Date(today);
            checkDate.setDate(checkDate.getDate() - 1);
            
            while (data.studyDays[checkDate.toISOString().split('T')[0]]) {
                streak++;
                checkDate.setDate(checkDate.getDate() - 1);
            }
            return streak;
        } else if (diffDays === 1) {
            // 昨天学习了，今天还没，返回昨天的连续天数
            return this.getStreakDays({...data, lastStudyDate: this.getToday()});
        }
        return 0;
    },
    
    // 计算总学习天数
    getTotalStudyDays: function(data) {
        return Object.keys(data.studyDays).length;
    },
    
    // 标记示例完成
    completeExample: function(exampleId) {
        const data = this.getData();
        if (!data.completedExamples.includes(exampleId)) {
            data.completedExamples.push(exampleId);
            
            // 记录今天的学习
            const today = this.getToday();
            if (!data.studyDays[today]) {
                data.studyDays[today] = [];
            }
            if (!data.studyDays[today].includes(exampleId)) {
                data.studyDays[today].push(exampleId);
            }
            
            // 更新日期
            if (!data.firstStudyDate) {
                data.firstStudyDate = today;
            }
            data.lastStudyDate = today;
            
            this.saveData(data);
            this.updateUI();
            this.checkDailyAchievements(today, data);
        }
    },
    
    // 取消完成
    uncompleteExample: function(exampleId) {
        const data = this.getData();
        const index = data.completedExamples.indexOf(exampleId);
        if (index > -1) {
            data.completedExamples.splice(index, 1);
            
            // 从当天记录中移除
            const today = this.getToday();
            if (data.studyDays[today]) {
                const dayIndex = data.studyDays[today].indexOf(exampleId);
                if (dayIndex > -1) {
                    data.studyDays[today].splice(dayIndex, 1);
                }
                // 如果当天没有示例了，删除该天记录
                if (data.studyDays[today].length === 0) {
                    delete data.studyDays[today];
                }
            }
            
            this.saveData(data);
            this.updateUI();
        }
    },
    
    // 更新UI
    updateUI: function() {
        const data = this.getData();
        const totalExamples = document.querySelectorAll('.example-card').length || 15;
        const completed = data.completedExamples.length;
        const percent = totalExamples > 0 ? Math.round((completed / totalExamples) * 100) : 0;
        
        const progressBar = document.getElementById('progressBar');
        const progressPercent = document.getElementById('progressPercent');
        const completedCount = document.getElementById('completedCount');
        const totalCount = document.getElementById('totalCount');
        const streakDays = document.getElementById('streakDays');
        const totalStudyDays = document.getElementById('totalStudyDays');
        
        if (progressBar) progressBar.style.width = percent + '%';
        if (progressPercent) progressPercent.textContent = percent + '%';
        if (completedCount) completedCount.textContent = completed;
        if (totalCount) totalCount.textContent = totalExamples;
        
        const streak = this.getStreakDays(data);
        const total = this.getTotalStudyDays(data);
        
        if (streakDays) {
            streakDays.textContent = streak > 0 ? '🔥 连续' + streak + '天' : '开始学习吧';
            streakDays.style.color = streak >= 7 ? '#f59e0b' : (streak >= 3 ? '#22c55e' : '#94a3b8');
        }
        if (totalStudyDays) totalStudyDays.textContent = '累计' + total + '天';
        
        // 更新示例卡片状态
        document.querySelectorAll('.example-card').forEach(function(card) {
            const exampleId = card.dataset.example;
            if (data.completedExamples.includes(exampleId)) {
                card.classList.add('completed');
            } else {
                card.classList.remove('completed');
            }
        });
        
        // 更新勾选框状态
        document.querySelectorAll('.task-checkbox').forEach(function(checkbox) {
            const exampleId = checkbox.dataset.exampleId;
            if (data.completedExamples.includes(exampleId)) {
                checkbox.classList.add('checked');
            } else {
                checkbox.classList.remove('checked');
            }
        });
    },
    
    // 按天激励成就
    checkDailyAchievements: function(today, data) {
        const todayExamples = data.studyDays[today] || [];
        const streak = this.getStreakDays(data);
        const totalDays = this.getTotalStudyDays(data);
        
        let title = '';
        let desc = '';
        
        // 今日学习成就
        if (todayExamples.length === 1) {
            title = '🌅 今日起步';
            desc = '今天完成了第一个示例，继续保持！';
        } else if (todayExamples.length === 3) {
            title = '☀️ 今日进步';
            desc = '今天完成了3个示例，学习效率不错！';
        } else if (todayExamples.length === 5) {
            title = '🎯 今日达人';
            desc = '今天完成了5个示例，学习热情高涨！';
        }
        
        // 连续学习成就
        if (streak === 3) {
            title = '🔥 三日坚持';
            desc = '连续学习3天，养成好习惯！';
        } else if (streak === 7) {
            title = '⭐ 七日达人';
            desc = '连续学习一周，毅力可嘉！';
        } else if (streak === 14) {
            title = '🏆 两周坚持';
            desc = '连续学习14天，坚持不懈！';
        } else if (streak === 30) {
            title = '👑 月度学霸';
            desc = '连续学习30天，学习达人！';
        }
        
        // 累计学习成就
        if (totalDays === 5) {
            title = '📚 五日学习';
            desc = '累计学习5天，稳步前进！';
        } else if (totalDays === 10) {
            title = '🚀 十日进阶';
            desc = '累计学习10天，技能提升！';
        } else if (totalDays === 30) {
            title = '💎 三十日成就';
            desc = '累计学习30天，经验丰富！';
        }
        
        // 任务完成成就
        const completed = data.completedExamples;
        if (this.isTaskComplete('ex1-', completed)) {
            title = '🎯 任务一完成';
            desc = '恭喜完成文字Logo任务！';
        } else if (this.isTaskComplete('ex2-', completed)) {
            title = '🎯 任务二完成';
            desc = '恭喜完成美食专题栏目任务！';
        } else if (this.isTaskComplete('ex3-', completed)) {
            title = '🎯 任务三完成';
            desc = '恭喜完成搜索页面任务！';
        }
        
        if (title) {
            this.showAchievement(title, desc);
        }
    },
    
    // 检查任务是否完成
    isTaskComplete: function(prefix, completedList) {
        const taskExamples = {
            'ex1-': ['ex1-1', 'ex1-2', 'ex1-3', 'ex1-4', 'ex1-5', 'ex1-ext'],
            'ex2-': ['ex2-1', 'ex2-2', 'ex2-3', 'ex2-4', 'ex2-ext'],
            'ex3-': ['ex3-1', 'ex3-2', 'ex3-5', 'ex3-ext']
        };
        
        const examples = taskExamples[prefix] || [];
        return examples.every(function(ex) {
            return completedList.includes(ex);
        });
    },
    
    // 显示成就弹窗
    showAchievement: function(title, desc) {
        const banner = document.getElementById('achievementBanner');
        const overlay = document.getElementById('achievementOverlay');
        const titleEl = document.getElementById('achievementTitle');
        const descEl = document.getElementById('achievementDesc');
        
        if (titleEl) titleEl.textContent = title;
        if (descEl) descEl.textContent = desc;
        
        setTimeout(function() {
            if (overlay) overlay.classList.add('show');
            if (banner) banner.classList.add('show');
        }, 300);
        
        // 3秒后自动关闭
        setTimeout(function() {
            if (overlay) overlay.classList.remove('show');
            if (banner) banner.classList.remove('show');
        }, 3000);
    },
    
    // 初始化
    init: function() {
        const self = this;
        
        // 初始化UI
        this.updateUI();
        
        // 绑定勾选框事件
        document.querySelectorAll('.task-checkbox').forEach(function(checkbox) {
            checkbox.addEventListener('click', function() {
                const exampleId = this.dataset.exampleId;
                const isChecked = this.classList.contains('checked');
                
                if (isChecked) {
                    self.uncompleteExample(exampleId);
                } else {
                    self.completeExample(exampleId);
                }
            });
        });
        
        // 点击遮罩关闭成就弹窗
        const overlay = document.getElementById('achievementOverlay');
        if (overlay) {
            overlay.addEventListener('click', function() {
                this.classList.remove('show');
                const banner = document.getElementById('achievementBanner');
                if (banner) banner.classList.remove('show');
            });
        }
    }
};

// ========================================
// HBuilderX操作技巧库（可扩展）
// ========================================
const hbuilderTips = {
    // 通用技巧
    general: [
        { tip: 'Ctrl+R 快速在浏览器中预览', detail: '保存后按Ctrl+R可直接在浏览器中查看效果' },
        { tip: 'Ctrl+S 保存文件', detail: '养成随手保存的习惯，避免代码丢失' },
        { tip: 'Ctrl+Z 撤销操作', detail: '撤销上一步操作，可多次撤销' },
        { tip: 'Ctrl+Shift+Z 重做', detail: '恢复被撤销的操作' },
    ],
    // 代码编辑技巧
    editing: [
        { tip: 'Tab 缩进代码', detail: '选中代码后按Tab键批量缩进' },
        { tip: 'Shift+Tab 取消缩进', detail: '减少一级缩进' },
        { tip: 'Ctrl+D 删除当前行', detail: '快速删除光标所在行' },
        { tip: 'Ctrl+/ 注释/取消注释', detail: '快速添加或移除代码注释' },
        { tip: 'Ctrl+Shift+F 格式化代码', detail: '自动整理代码格式，让代码更整洁' },
        { tip: 'Ctrl+Shift+R 复制当前行', detail: '快速复制当前行到下一行' },
    ],
    // 项目管理技巧
    project: [
        { tip: 'Ctrl+N 新建文件', detail: '快速创建新文件' },
        { tip: 'Ctrl+Shift+N 新建项目', detail: '创建新的项目文件夹' },
        { tip: 'Ctrl+W 关闭当前文件', detail: '关闭当前编辑的文件' },
    ],
    // 查找替换技巧
    search: [
        { tip: 'Ctrl+F 查找', detail: '在当前文件中查找内容' },
        { tip: 'Ctrl+H 替换', detail: '查找并替换内容' },
        { tip: 'Ctrl+Shift+F 全局查找', detail: '在整个项目中查找内容' },
    ],
    // 预览调试技巧
    preview: [
        { tip: 'F12 打开开发者工具', detail: '在浏览器中调试CSS样式' },
        { tip: '右键→检查元素', detail: '快速定位页面元素' },
        { tip: '一键生成二维码', detail: 'HBuilderX支持生成二维码，手机扫码预览' },
        { tip: '边改边看模式', detail: '开启实时预览，修改代码立即看到效果' },
    ],
    // 代码片段技巧
    snippet: [
        { tip: '输入html按Tab', detail: '快速生成HTML文档结构' },
        { tip: '输入div.className按Tab', detail: '快速生成带class的div' },
        { tip: '输入ul>li*3按Tab', detail: '快速生成3个li的ul列表' },
        { tip: '输入link:css按Tab', detail: '快速生成CSS链接标签' },
    ],
    // 多光标编辑
    multicursor: [
        { tip: 'Alt+点击', detail: '添加多个光标，同时编辑多处' },
        { tip: 'Ctrl+Alt+上/下箭头', detail: '在上方或下方添加光标' },
        { tip: '选中文字后Ctrl+D', detail: '依次选中下一个相同的词' },
    ]
};

// 获取随机技巧
function getRandomTip(category) {
    const tips = hbuilderTips[category] || hbuilderTips.general;
    return tips[Math.floor(Math.random() * tips.length)];
}

// 获取不重复的多个技巧
function getUniqueTips(count = 3) {
    const allTips = [];
    Object.values(hbuilderTips).forEach(tips => allTips.push(...tips));
    
    const shuffled = allTips.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// ========================================
// 知识点链接映射
// ========================================
const knowledgeLinks = {
    // HTML标签
    'style': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/style',
    'link': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link',
    'head': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/head',
    'body': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/body',
    'p': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p',
    'h2': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements',
    'h3': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements',
    'strong': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/strong',
    'span': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span',
    'div': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div',
    'meta': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta',
    'title': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/title',
    
    // HTML属性
    'class': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/class',
    'id': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/id',
    'href': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#href',
    'rel': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/rel',
    'type': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#type',
    'charset': 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#charset',
    
    // CSS属性
    'font-size': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size',
    'font-family': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family',
    'font-weight': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight',
    'font-style': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style',
    'font': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/font',
    'color': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/color',
    'text-decoration': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration',
    'text-align': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align',
    'line-height': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height',
    'letter-spacing': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/letter-spacing',
    'word-spacing': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-spacing',
    'background': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/background',
    'background-color': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-color',
    
    // CSS选择器相关
    '选择器': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors',
    '类选择器': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Class_selectors',
    'ID选择器': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/ID_selectors',
    '标签选择器': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Type_selectors',
    '后代选择器': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Descendant_combinator',
    '子选择器': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator',
    '并集选择器': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Selector_list',
    
    // CSS概念
    '层叠性': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Cascade',
    '继承性': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/inheritance',
    '优先级': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity',
    '权重': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity',
    
    // CSS3特性
    '@font-face': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face',
    'text-shadow': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow',
    'transform': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform',
    'linear-gradient': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/linear-gradient',
    'border-radius': 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius',
};

// ========================================
// 主初始化
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成，初始化交互...');
    
    // 初始化进度追踪
    ProgressTracker.init();
    
    initMobileMenu();
    initNavigation();
    initExampleCards();
    initCodeHighlight();
    initCopyButtons();
    initLivePreviews();
    initHBuilderTips();
    initKnowledgeLinks();
});

// ========================================
// HBuilderX技巧提示
// ========================================
function initHBuilderTips() {
    var tipContainers = document.querySelectorAll('.hbuilder-tip');
    tipContainers.forEach(function(container) {
        var category = container.dataset.category || 'general';
        var tip = getRandomTip(category);
        container.innerHTML = '<strong>HBuilderX技巧：</strong>' + tip.tip + ' - ' + tip.detail;
    });
}

// ========================================
// 知识点链接
// ========================================
function initKnowledgeLinks() {
    // 为知识点中的代码添加链接
    var knowledgeItems = document.querySelectorAll('.knowledge-item code, .knowledge-item .highlight');
    
    knowledgeItems.forEach(function(item) {
        var text = item.textContent.trim();
        
        // 处理带<>的标签
        if (text.startsWith('<') && text.endsWith('>')) {
            var tagName = text.slice(1, -1);
            if (knowledgeLinks[tagName]) {
                makeLink(item, knowledgeLinks[tagName]);
                return;
            }
        }
        
        // 处理带.的类名
        if (text.startsWith('.')) {
            makeLink(item, knowledgeLinks['类选择器']);
            return;
        }
        
        // 处理带#的ID
        if (text.startsWith('#')) {
            makeLink(item, knowledgeLinks['ID选择器']);
            return;
        }
        
        // 直接匹配
        if (knowledgeLinks[text]) {
            makeLink(item, knowledgeLinks[text]);
        }
    });
    
    // 禁用知识点中的关键词自动链接，保持页面简洁
    // 用户可通过代码块的标签自行查阅
}

function makeLink(element, url) {
    var link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.className = 'knowledge-link';
    link.textContent = element.textContent;
    element.textContent = '';
    element.appendChild(link);
}

// ========================================
// 实时预览功能
// ========================================
function initLivePreviews() {
    // 初始化双编辑器合并预览（如task12的HTML+CSS完整效果）
    initCombinedPreviews();
    
    // 定义合并预览使用的CSS编辑器ID，避免重复处理
    var combinedCssIds = [
        'code-ex11-3-css',
        'code-ex12-2-css', 'code-ex12-4-css',
        'code-ex13-6-css',
        'code-ex14-4-css'
    ];
    
    var codeTextareas = document.querySelectorAll('.code-editor');
    
    codeTextareas.forEach(function(textarea) {
        // 跳过用于合并预览的CSS编辑器
        if (combinedCssIds.indexOf(textarea.id) !== -1) {
            return;
        }
        
        var previewId;
        
        // 优先使用 data-preview 属性
        if (textarea.dataset.preview) {
            previewId = textarea.dataset.preview;
        } else {
            // 如果没有 data-preview，从 id 推导 (code-ex1 -> preview-ex1)
            var id = textarea.id;
            if (id && id.startsWith('code-')) {
                previewId = 'preview-' + id.substring(5);
            }
        }
        
        var previewFrame = previewId ? document.getElementById(previewId) : null;
        
        if (previewFrame) {
            // 初始渲染
            updatePreview(textarea, previewFrame);
            
            // 监听输入变化
            textarea.addEventListener('input', function() {
                updatePreview(textarea, previewFrame);
            });
        }
    });
}

// 处理双编辑器合并预览（HTML+CSS完整效果）
function initCombinedPreviews() {
    // 定义需要合并预览的配对（HTML编辑器 + CSS编辑器 → 预览框）
    var combinedPairs = [
        { htmlId: 'code-ex11-3-html', cssId: 'code-ex11-3-css', previewId: 'preview-ex11-3-css' },
        { htmlId: 'code-ex12-2-html', cssId: 'code-ex12-2-css', previewId: 'preview-ex12-2-css' },
        { htmlId: 'code-ex12-4-html', cssId: 'code-ex12-4-css', previewId: 'preview-ex12-4-css' },
        { htmlId: 'code-ex13-6-html', cssId: 'code-ex13-6-css', previewId: 'preview-ex13-6-css' },
        { htmlId: 'code-ex14-4-html', cssId: 'code-ex14-4-css', previewId: 'preview-ex14-4-css' }
    ];
    
    // 同时在initLivePreviews中排除这些CSS编辑器
    var combinedCssIds = ['code-ex12-2-css', 'code-ex12-4-css'];
    
    combinedPairs.forEach(function(pair) {
        var htmlEditor = document.getElementById(pair.htmlId);
        var cssEditor = document.getElementById(pair.cssId);
        var previewFrame = document.getElementById(pair.previewId);
        
        if (htmlEditor && cssEditor && previewFrame) {
            // 初始渲染
            updateCombinedPreview(htmlEditor, cssEditor, previewFrame);
            
            // 监听两个编辑器的变化
            htmlEditor.addEventListener('input', function() {
                updateCombinedPreview(htmlEditor, cssEditor, previewFrame);
            });
            cssEditor.addEventListener('input', function() {
                updateCombinedPreview(htmlEditor, cssEditor, previewFrame);
            });
        }
    });
}

// 更新合并后的预览
function updateCombinedPreview(htmlEditor, cssEditor, previewFrame) {
    var htmlCode = htmlEditor.value;
    var cssCode = cssEditor.value;
    
    // 检查HTML代码是否已包含style标签
    if (htmlCode.indexOf('<style>') === -1 && htmlCode.indexOf('</style>') === -1) {
        // 将CSS插入到HTML的</head>前，或<body>后
        if (htmlCode.indexOf('</head>') !== -1) {
            htmlCode = htmlCode.replace('</head>', '<style>' + cssCode + '</style></head>');
        } else if (htmlCode.indexOf('<body>') !== -1) {
            htmlCode = htmlCode.replace('<body>', '<body><style>' + cssCode + '</style>');
        } else {
            // 如果都没有，直接追加
            htmlCode += '<style>' + cssCode + '</style>';
        }
    }
    
    var doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    doc.open();
    doc.write(htmlCode);
    doc.close();
}

function updatePreview(textarea, previewFrame) {
    var code = textarea.value;
    var doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
}

// ========================================
// 移动端菜单
// ========================================
function initMobileMenu() {
    var menuBtn = document.querySelector('.mobile-menu-btn');
    var overlay = document.querySelector('.sidebar-overlay');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleSidebar();
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', function() {
            toggleSidebar();
        });
    }
}

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var overlay = document.querySelector('.sidebar-overlay');
    
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
    if (overlay) {
        overlay.classList.toggle('active');
    }
}

// ========================================
// 导航功能
// ========================================
function initNavigation() {
    var navItems = document.querySelectorAll('.nav-item');
    var taskSections = document.querySelectorAll('.task-section');
    
    navItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            var taskId = this.getAttribute('data-task');
            
            // 如果有 data-task 且当前页面是独立的 task 页面，跳转到对应页面
            if (taskId && window.location.pathname.match(/task\d+\.html$/)) {
                window.location.href = taskId + '.html';
                return;
            }
            
            // 否则执行同页切换（单页应用模式）
            navItems.forEach(function(nav) {
                nav.classList.remove('active');
            });
            this.classList.add('active');
            
            taskSections.forEach(function(section) {
                section.classList.remove('active');
                if (section.id === taskId) {
                    section.classList.add('active');
                }
            });
            
            var sidebar = document.querySelector('.sidebar');
            var overlay = document.querySelector('.sidebar-overlay');
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
            }
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ========================================
// 示例卡片
// ========================================
function initExampleCards() {
    var headers = document.querySelectorAll('.example-header');
    
    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            toggleExample(this);
        });
    });
}

function toggleExample(header) {
    var card = header.closest('.example-card');
    if (!card) return;
    
    var isExpanded = card.classList.contains('expanded');
    
    if (isExpanded) {
        card.classList.remove('expanded');
    } else {
        card.classList.add('expanded');
        setTimeout(function() {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

// ========================================
// 代码高亮
// ========================================
function initCodeHighlight() {
    var codeBlocks = document.querySelectorAll('.code-block pre code');
    
    codeBlocks.forEach(function(code) {
        var html = code.innerHTML;
        var parentBlock = code.closest('.code-block');
        var langLabel = parentBlock ? parentBlock.querySelector('.code-lang') : null;
        var langText = langLabel ? langLabel.textContent : '';
        
        if (code.classList.contains('language-html') || langText.indexOf('HTML') !== -1) {
            html = html.replace(/&lt;(\/?[\w-]+)/g, '<span class="hl-tag">&lt;$1</span>');
            html = html.replace(/([\w-]+)=/g, '<span class="hl-attr">$1</span>=');
            html = html.replace(/"([^"]*)"/g, '"<span class="hl-string">$1</span>"');
            html = html.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="hl-comment">$1</span>');
            html = html.replace(/([\w-]+)\s*:/g, '<span class="hl-property">$1</span>:');
        }
        
        if (code.classList.contains('language-css') || langText.indexOf('CSS') !== -1) {
            html = html.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="hl-comment">$1</span>');
            html = html.replace(/([\w-]+)\s*{/g, '<span class="hl-selector">$1</span> {');
            html = html.replace(/([\w-]+)\s*:/g, '<span class="hl-property">$1</span>:');
        }
        
        code.innerHTML = html;
    });
}

// ========================================
// 复制功能
// ========================================
function initCopyButtons() {
    var copyBtns = document.querySelectorAll('.copy-btn');
    
    copyBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            copyCode(this);
        });
    });
}

function copyCode(button) {
    var codeBlock = button.closest('.code-block');
    var code = codeBlock.querySelector('pre code');
    var text = code.textContent;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            showCopySuccess(button);
        }).catch(function(err) {
            console.error('复制失败:', err);
            fallbackCopy(text, button);
        });
    } else {
        fallbackCopy(text, button);
    }
}

function showCopySuccess(button) {
    var originalHTML = button.innerHTML;
    button.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg> 已复制';
    button.classList.add('copied');
    
    setTimeout(function() {
        button.innerHTML = originalHTML;
        button.classList.remove('copied');
    }, 2000);
}

function fallbackCopy(text, button) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess(button);
    } catch (err) {
        console.error('降级复制也失败:', err);
    }
    
    document.body.removeChild(textarea);
}

// ========================================
// 测验功能
// ========================================
function selectQuizOption(option) {
    var quizSection = option.closest('.quiz-section');
    var options = quizSection.querySelectorAll('.quiz-option');
    var feedback = quizSection.querySelector('.quiz-feedback');
    var isCorrect = option.dataset.answer === 'correct';
    
    // 清除之前的选择
    options.forEach(function(opt) {
        opt.classList.remove('selected', 'correct', 'wrong');
    });
    
    // 显示答案
    options.forEach(function(opt) {
        if (opt.dataset.answer === 'correct') {
            opt.classList.add('correct');
        } else if (opt === option && !isCorrect) {
            opt.classList.add('wrong');
        }
    });
    
    // 显示反馈
    feedback.classList.add('show');
    if (isCorrect) {
        feedback.className = 'quiz-feedback show correct';
        feedback.innerHTML = '✅ 正确！ID选择器的权重是100，优先级最高。';
    } else {
        feedback.className = 'quiz-feedback show wrong';
        feedback.innerHTML = '❌ 错误！提示：ID选择器以#开头，权重为100，高于类选择器(10)和标签选择器(1)。';
    }
}

// ========================================
// 填空练习
// ========================================
function checkFillBlank(btn) {
    var fillBlank = btn.closest('.fill-blank');
    var inputs = fillBlank.querySelectorAll('.blank-input');
    var allCorrect = true;
    
    inputs.forEach(function(input) {
        var answer = input.dataset.answer;
        var value = input.value.trim();
        
        if (value === answer) {
            input.classList.remove('wrong');
            input.classList.add('correct');
        } else {
            input.classList.remove('correct');
            input.classList.add('wrong');
            allCorrect = false;
        }
    });
    
    if (allCorrect) {
        btn.textContent = '✅ 全部正确！';
        btn.style.background = '#22c55e';
    } else {
        btn.textContent = '再试一次';
        btn.style.background = '#ef4444';
    }
    
    setTimeout(function() {
        btn.textContent = '检查答案';
        btn.style.background = '';
    }, 2000);
}

// ========================================
// 渐进式讲解标签页
// ========================================
function initStepTabs() {
    var tabContainers = document.querySelectorAll('.progressive-steps');
    
    tabContainers.forEach(function(container) {
        var tabs = container.querySelectorAll('.step-tab');
        var contents = container.querySelectorAll('.step-content');
        
        tabs.forEach(function(tab, index) {
            tab.addEventListener('click', function() {
                tabs.forEach(function(t) { t.classList.remove('active'); });
                contents.forEach(function(c) { c.classList.remove('active'); });
                
                tab.classList.add('active');
                contents[index].classList.add('active');
            });
        });
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initStepTabs();
});
